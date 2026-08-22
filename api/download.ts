import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory / file fallback storage for development
let memoryCount = 12847;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // If Supabase credentials are set in environment variables
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      // Connect to Supabase persistent table 'pastry_stats'
      const fetchUrl = `${supabaseUrl}/rest/v1/pastry_stats?id=eq.global&select=downloads`;

      if (req.method === 'GET') {
        const response = await fetch(fetchUrl, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
          },
        });
        const data = await response.json();
        if (data && data[0] && typeof data[0].downloads === 'number') {
          return res.status(200).json({ count: data[0].downloads });
        }
      } else if (req.method === 'POST') {
        // Fetch current count
        const getRes = await fetch(fetchUrl, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
          },
        });
        const getData = await getRes.json();
        const current = (getData && getData[0] && getData[0].downloads) || memoryCount;
        const newCount = current + 1;

        // Update in DB
        await fetch(`${supabaseUrl}/rest/v1/pastry_stats?id=eq.global`, {
          method: 'PATCH',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ downloads: newCount }),
        });

        memoryCount = newCount;
        return res.status(200).json({ count: newCount });
      }
    }

    // Fallback if DB env vars not present yet
    if (req.method === 'POST') {
      memoryCount += 1;
    }

    return res.status(200).json({ count: memoryCount });

  } catch (error) {
    console.error('Download counter API error:', error);
    if (req.method === 'POST') {
      memoryCount += 1;
    }
    return res.status(200).json({ count: memoryCount });
  }
}

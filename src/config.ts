// Central Configuration file for Pastry landing page
// Edit these values to update site links, versioning, download URLs, and repository info.

export const CONFIG = {
  appName: 'Pastry',
  tagline: 'Your clipboard history, one shortcut away.',
  version: '1.0.0',
  downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.0.0/Pastry.dmg', // Official Pastry v1.0.0 DMG direct download link
  githubUrl: 'https://github.com/balajeein/Pastry.git', // Official Pastry GitHub repository
  whatsappCommunityUrl: 'https://chat.whatsapp.com/IHyPCnMOyhDHM7qRdCp9vQ?mode=gi_t', // Official WhatsApp Community join link
  minMacOsVersion: 'macOS 12.0+',
  architectures: ['Apple Silicon', 'Intel'],
  shortcutKey: '⌘ + Shift + V',
  initialDownloadSeed: 12847, // Default seed count if API initialized fresh
};

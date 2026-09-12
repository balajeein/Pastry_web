// Central Configuration file for Pastry landing page
// Edit these values to update site links, versioning, download URLs, and repository info.

export interface DetailCategory {
  title: string;
  items?: string[];
  subsections?: {
    subtitle: string;
    items: string[];
  }[];
  keyValuePairs?: { label: string; value: string }[];
}

export interface VersionItem {
  version: string;
  build: string;
  latest?: boolean;
  notRecommended?: boolean;
  downloadUrl: string;
  notes: string;
  releaseDate: string;
  tagline?: string;
  sections?: DetailCategory[];
}

export const VERSIONS: VersionItem[] = [
  {
    version: '2.0.1',
    build: '1',
    latest: true,
    notRecommended: false,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v2.0.1/Pastry-2.0.1.dmg',
    notes: 'Pastry v2.0.1 release — bug fixes, shortcut preview reliability, and stability improvements.',
    releaseDate: '10 Sep 2026',
    tagline: 'Bug fixes, shortcut reliability, and performance enhancements.',
    sections: [
      {
        title: "Improvements",
        items: [
          "Fixed various bugs and stability issues.",
          "Updated shortcut preview behavior for a more reliable and accurate preview.",
          "Improved shortcut handling and interaction.",
          "Updated the update checker with a temporary hardcoded update state while Apple Developer signing and notarization are unavailable.",
          "General performance and reliability improvements."
        ]
      },
      {
        title: "Compatibility",
        keyValuePairs: [
          { label: "Apple Silicon", value: "Yes" },
          { label: "Intel", value: "Yes" },
          { label: "Minimum macOS", value: "11.0" },
          { label: "Universal 2 binary", value: "Yes" }
        ]
      }
    ]
  },
  {
    version: '2.0.0',
    build: '1',
    latest: false,
    notRecommended: false,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v2.0.0/Pastry-2.0.0.dmg',
    notes: 'Pastry v2.0.0 release — introducing Scroll Screenshot, Text Shortcuts, and Image Shortcuts.',
    releaseDate: '2 Sep 2026',
    tagline: 'Major release introducing scrolling screenshots, text shortcuts, and image shortcuts.',
    sections: [
      {
        title: "What's New",
        subsections: [
          {
            subtitle: "Scroll Screenshot",
            items: [
              "Capture full length webpages and long content with scrolling screenshots beyond window boundaries.",
              "Automatically stitch scrolling content into high-resolution screenshots."
            ]
          },
          {
            subtitle: "Text Shortcuts",
            items: [
              "Create custom text shortcuts and expand saved text snippets instantly wherever you type.",
              "Manage text expansions easily inside Pastry."
            ]
          },
          {
            subtitle: "Image Shortcuts",
            items: [
              "Create custom image shortcuts for frequently used media and graphics.",
              "Insert saved images directly into your work with instant shortcuts."
            ]
          }
        ]
      },
      {
        title: "Improvements",
        items: [
          "Enhanced clipboard history search and paste responsiveness.",
          "Preserved smart calculator and automatic screenshot tracking.",
          "Full Universal 2 support for Apple Silicon and Intel Macs."
        ]
      },
      {
        title: "Compatibility",
        keyValuePairs: [
          { label: "Apple Silicon", value: "Yes" },
          { label: "Intel", value: "Yes" },
          { label: "Minimum macOS", value: "11.0" },
          { label: "Universal 2 binary", value: "Yes" }
        ]
      }
    ]
  },
  {
    version: '1.1.1',
    build: '3',
    latest: false,
    notRecommended: false,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.1.1/Pastry.dmg',
    notes: 'Pastry v1.1.1 release.',
    releaseDate: '26 Aug 2026',
    tagline: 'Universal 2 support and stability improvements.',
    sections: [
      {
        title: "Improvements",
        items: [
          "Added Universal 2 support for both Apple Silicon and Intel Macs.",
          "Lowered the minimum supported macOS version to macOS 11.",
          "Pastry now supports macOS 11+ on both arm64 and x86_64."
        ]
      },
      {
        title: "Calculator",
        items: [
          "Fixed detection of Unicode minus (−).",
          "Added support for implicit multiplication such as (2)(3) and (−0.4)(1).",
          "Improved negative number and decimal expression handling.",
          "Added regression tests for more mathematical expressions."
        ]
      },
      {
        title: "Screenshot Tracking",
        items: [
          "Continued improvements to automatic screenshot tracking and thumbnail handling.",
          "Preserved the pause/resume screenshot tracking functionality."
        ]
      },
      {
        title: "Compatibility",
        keyValuePairs: [
          { label: "Apple Silicon", value: "Yes" },
          { label: "Intel", value: "Yes" },
          { label: "Minimum macOS", value: "11.0" },
          { label: "Universal 2 binary", value: "Yes" }
        ]
      }
    ]
  },
  {
    version: '1.1.0',
    build: '2',
    latest: false,
    notRecommended: true,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.1.0/Pastry.dmg',
    notes: 'Pastry v1.1.0 release.',
    releaseDate: '25 Aug 2026',
    tagline: 'A smarter and more powerful clipboard experience.',
    sections: [
      {
        title: "What's New",
        subsections: [
          {
            subtitle: "Smart Calculator",
            items: [
              "Automatically detects mathematical expressions copied to the clipboard.",
              "Shows the original text and calculated answer side-by-side.",
              "Choose whether to paste the original expression or the calculated result.",
              "Supports arithmetic, decimals, parentheses, negative numbers, percentages, and more.",
              "Non-mathematical text continues to behave exactly like normal clipboard content."
            ]
          },
          {
            subtitle: "Automatic Screenshot Tracking",
            items: [
              "Screenshots taken with macOS screenshot shortcuts are automatically added to Pastry's clipboard history.",
              "Supports full-screen screenshots (⌘⇧3) and area screenshots (⌘⇧4).",
              "Each screenshot gets its own correct preview."
            ]
          },
          {
            subtitle: "Pause Screenshot Tracking",
            items: [
              "Added a privacy option to pause automatic screenshot tracking.",
              "Screenshots taken while tracking is paused are ignored and are not added later when tracking resumes."
            ]
          }
        ]
      },
      {
        title: "Improvements",
        items: [
          "Improved screenshot detection and clipboard integration.",
          "Fixed screenshot thumbnail duplication.",
          "Improved clipboard image handling.",
          "Preserved existing clipboard history and paste behavior.",
          "Improved overall stability of the floating clipboard window."
        ]
      }
    ]
  },
  {
    version: '1.0.0',
    build: '1',
    latest: false,
    notRecommended: true,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.0.0/Pastry.dmg',
    notes: 'Initial public release.',
    releaseDate: '23 Aug 2026',
    tagline: 'The first release of Pastry — a simple, lightweight clipboard history utility for macOS.',
    sections: [
      {
        title: "What's included",
        items: [
          "Clipboard history for recent copied items",
          "Quick access with a global keyboard shortcut",
          "Text, images, links, and other supported clipboard content",
          "Native macOS menu bar experience",
          "Lightweight and local"
        ]
      },
      {
        title: "Requirements",
        items: [
          "macOS"
        ]
      }
    ]
  },
];

export const LATEST_VERSION = VERSIONS.find((v) => v.latest)?.version || '2.0.1';
export const LATEST_DOWNLOAD_URL = VERSIONS.find((v) => v.latest)?.downloadUrl || 'https://github.com/balajeein/Pastry/releases/download/v2.0.1/Pastry-2.0.1.dmg';

export const CONFIG = {
  appName: 'Pastry',
  tagline: 'Your clipboard history, one shortcut away.',
  version: LATEST_VERSION,
  downloadUrl: LATEST_DOWNLOAD_URL,
  githubUrl: 'https://github.com/balajeein/Pastry.git', // Official Pastry GitHub repository
  whatsappCommunityUrl: 'https://chat.whatsapp.com/IHyPCnMOyhDHM7qRdCp9vQ?mode=gi_t', // Official WhatsApp Community join link
  minMacOsVersion: 'macOS 12.0+',
  architectures: ['Apple Silicon', 'Intel'],
  shortcutKey: '⌘ + Shift + V',
  initialDownloadSeed: 12847, // Default seed count if API initialized fresh
  versions: VERSIONS,
};



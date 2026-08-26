// Central Configuration file for Pastry landing page
// Edit these values to update site links, versioning, download URLs, and repository info.

export interface VersionItem {
  version: string;
  build: string;
  latest?: boolean;
  downloadUrl: string;
  notes: string;
  releaseDate: string;
}

export const VERSIONS: VersionItem[] = [
  {
    version: '1.1.1',
    build: '3',
    latest: true,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.1.1/Pastry.dmg',
    notes: 'Pastry v1.1.1 release.',
    releaseDate: '26 Aug 2026',
  },
  {
    version: '1.1.0',
    build: '2',
    latest: false,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.1.0/Pastry.dmg',
    notes: 'Pastry v1.1.0 release.',
    releaseDate: '25 Aug 2026',
  },
  {
    version: '1.0.0',
    build: '1',
    latest: false,
    downloadUrl: 'https://github.com/balajeein/Pastry/releases/download/v1.0.0/Pastry.dmg',
    notes: 'Initial public release.',
    releaseDate: '23 Aug 2026',
  },
];

export const LATEST_VERSION = VERSIONS.find((v) => v.latest)?.version || '1.1.1';
export const LATEST_DOWNLOAD_URL = VERSIONS.find((v) => v.latest)?.downloadUrl || 'https://github.com/balajeein/Pastry/releases/download/v1.1.1/Pastry.dmg';

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


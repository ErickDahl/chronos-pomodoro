export default {
  '**/*.{ts,tsx,css}': stagedFiles => [`npm run format `, `npm run lint`],
};

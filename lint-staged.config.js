export default {
  '**/*.{ts,tsx}': stagedFiles => [`npm run format `, `npm run lint`],
};

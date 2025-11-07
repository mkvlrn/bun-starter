export default {
  "*.{ts,tsx}": ["tsc-files", "biome check --no-errors-on-unmatched", "bun test --bail=1"],
  "*.{json,jsonc}": ["biome check --no-errors-on-unmatched"],
};

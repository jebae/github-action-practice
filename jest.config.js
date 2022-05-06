module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/**/*.stories.{tsx,jsx}",
    "!src/index.tsx",
  ],
};

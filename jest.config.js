const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest to handle TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Recognize TypeScript files
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);

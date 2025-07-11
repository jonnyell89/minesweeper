// Rename jest.config.js -> jest.config.mjs and use import instead of require.
// const { createDefaultPreset } = require("ts-jest"); // Replace "require"

import { createDefaultPreset } from "ts-jest"; // With "import".

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ["<rootDir>/test"], // Directs Jest to /test folder.
};

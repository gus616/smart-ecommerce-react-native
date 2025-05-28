import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|expo-modules-core|@unimodules|unimodules-permissions-interface|react-navigation)/',
  ],
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
};

export default config;

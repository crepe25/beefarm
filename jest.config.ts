export default {
  preset: 'react-native',
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

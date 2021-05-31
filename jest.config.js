module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  rootDir: './',

  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  transform: {
    '^.+\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  reporters: ['default', 'jest-junit', '<rootDir>/jest/kollide_reporter.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['./jest/jest.setup.js', 'raf/polyfill'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./jest/mutation-setup.ts', './jest/mock-useEffect.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
}

process.env.TZ = 'GMT-5';

module.exports = {
  testRegex: '((\\.|/*.)(test))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/__mocks__/fileMock.js',
    '^@__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^@__tests__/(.*)$': '<rootDir>/src/__tests__/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@mixins/(.*)$': '<rootDir>/src/mixins/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/src/__mocks__/fileMock.js'
  }
};

// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
};
export default config;


module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    roots: ['src'],
    testMatch: ['<rootDir>/src/?(*.)spec.{ts,tsx}'],
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
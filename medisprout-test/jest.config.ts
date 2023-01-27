import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
    bail: true,
    preset: "ts-jest"
  };
};
/* eslint-disable import/no-extraneous-dependencies */
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', // 테스트는 여기에 있어
  retries: 0,
  use: {
    channel: 'chrome',
    baseURL: 'http://localhost:8085',
    headless: !!process.env.CI, // CI 환경이 잡혀 있으면 headless로 한다.
    screenshot: 'only-on-failure',
  },
};

export default config;

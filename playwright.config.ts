import { defineConfig, devices } from '@playwright/test';
import { ConfigManager } from 'src/config/ConfigManager';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: ConfigManager.getWorkers(),
  reporter: [['html', {open: 'never'}]],
  use: {
    baseURL: ConfigManager.getBaseUrl(),
    headless: ConfigManager.isHeadless(),
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
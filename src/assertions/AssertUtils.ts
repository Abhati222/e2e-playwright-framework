import {expect} from '@playwright/test';

export class AssertUtils {
    public static async assertEquals(
        actual: string,
        expected: string,
        message?: string
    ): Promise<void> {
        await expect(actual, message).toBe(expected);
    }

    public static async assertContains(
        actual: string,
        expected: string,
        message?: string
    ): Promise<void> {
        await expect(actual, message).toContain(expected);
    }
}


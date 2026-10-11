import {page, locator} from '@playwright/test';

export class UIActions {
    constructor(private readonly page: Page) {}

    public async navigateTo(url:string): Promise<void> {
        await  this.page.goto(url, {waitUntil: 'load'});
    }

    public getLocator(selector: string, description?: string): Locator {
        return this.page.locator(selector);
    }

    public async click(selector: string): Promise<void> {
        await this.getLocator(selector).click();
    }

    public async fill(selector: string, value: string): Promise<void> {
        await this.getLocator(selector).fill(value);
    }

    public async getText(selector: string): Promise<void> {
        return(await this.getLocator(selector).innerText()).trim();
    }
}
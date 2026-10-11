import { Page } from '@playwright/test';
import { UIActions } from '../actions/UIActions';
import { AssertUtils } from '../assertions/AssertUtils';
import { LoginPageLocators } from '../pages/Locators/LoginPageLocator';

export class LoginPage {
    private readonly uiActions: UIActions;

    constructor(page: Page) {
        this.uiActions = new UIActions(page);
    }

    public async navigateToLogin(): Promise<void> {
        await this.uiActions.navigateTo('https://www.google.com');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.uiActions.fill(LoginPageLocators.USERNAME_INPUT, username);
        await this.uiActions.fill(LoginPageLocators.PASSWORD_INPUT, password);
        await this.uiActions.click(LoginPageLocators.LOGIN_BUTTON);
    }

    public async verifyLoginError(expectedMessage: string): Promise<void> {
        const actualMessage = await this.uiActions.getText(
            LoginPageLocators.ERROR_MESSAGE
        );

        await AssertUtils.assertEquals(
            actualMessage, expectedMessage, 'Login error message mismatch'
        );
    }
}
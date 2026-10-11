import {test} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LoginTestData } from '../../test-data/LoginTestData';

test.describe('Login Validation', () => {
    test('should show error for invalid creds', async({page})=> {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login(LoginTestData.INVALID_USER.username, LoginTestData.INVALID_USER.password);
        await loginPage.verifyLoginError('An internal error has occurred');
    });
});


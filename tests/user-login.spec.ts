import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";

test.describe("Login Success", () => {
  test("User login success", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.displayLoginPage();
    await loginPage.loginWithCorrectPassword();

    await homePage.displayHomePage();
  });
  test("User login fail", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.displayLoginPage();
    await loginPage.loginWithIncorrectPassword();
    await loginPage.displayLoginError();
  });
});

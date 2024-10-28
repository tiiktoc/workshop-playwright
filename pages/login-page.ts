import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly image: Locator;
  readonly pageTitle: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly msgError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.image = this.page.getByTestId("odds-image");
    this.pageTitle = this.page.getByTestId("login-title");
    this.usernameInput = this.page
      .getByTestId("text-input")
      .getByPlaceholder("Enter Username");
    this.passwordInput = this.page
      .getByTestId("text-input")
      .getByPlaceholder("Enter Password");
    this.loginButton = this.page.locator("login-button");
    this.msgError = this.page.getByText("Login Fail");
  }

  async gotoLoginPage() {
    await this.page.goto("https://workshop-playwright.vercel.app/");
  }

  async displayLoginPage() {
    await expect(this.image).toBeVisible();
    await expect(this.pageTitle).toBeVisible();
  }

  async login() {
    await this.usernameInput.fill("username");
    await this.passwordInput.fill("password");
    await this.loginButton.click();
  }

  async loginWithCorrectPassword() {
    await this.usernameInput.fill("username");
    await this.passwordInput.fill("password");
    await this.loginButton.click();
  }

  async loginWithIncorrectPassword() {
    await this.usernameInput.fill("username");
    await this.passwordInput.fill("password1234");
    await this.loginButton.click();
  }

  async displayLoginError() {
    await expect(this.msgError).toBeVisible();
  }
}

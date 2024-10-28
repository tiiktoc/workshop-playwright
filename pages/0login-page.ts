import { expect, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  async gotoLoginPage() {
    await this.page.goto("https://odds-playwright.vercel.app/");
  }

  async displayLoginPage() {
    await expect(this.page.getByTestId("odds-image")).toBeVisible();
    await expect(this.page.getByTestId("login-title")).toBeVisible();
  }

  async login() {
    await this.page
      .getByTestId("text-input")
      .getByPlaceholder("Enter Username")
      .fill("username");
    await this.page
      .getByTestId("text-input")
      .getByPlaceholder("Enter Password")
      .fill("password");
    await this.page.locator("login-button").click();
  }
}

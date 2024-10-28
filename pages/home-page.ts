import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  readonly image: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.image = this.page.getByTestId("odds-image");
    this.pageTitle = this.page.getByTestId("login-title");
  }

  async displayHomePage() {
    await expect(this.pageTitle).toBeVisible();
  }
}

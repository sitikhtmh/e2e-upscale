/// <reference types="cypress" />

describe("Verify the Landing Page", () => {
  beforeEach(() => {
    cy.visit("https://upscale.edudev.xyz", { timeout: 10000 });
    cy.url().should("include", "upscale.edudev.xyz");
  });
  it("As user, logout from website", () => {
    cy.fixture("user").then((user) => {
      cy.get(".btn-login").click();
      const email = user.email;
      const password = user.password;

      //login
      cy.login(email, password);
      cy.wait(2000);

      //logout
      cy.get('.dropdown > [href="https://upscale.edudev.xyz"]').realHover("mouse");
      cy.contains("Logout").click();
      cy.get(".slide.slide-title1").should("be.visible");
    });
  });
});

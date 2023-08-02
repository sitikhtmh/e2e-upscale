/// <reference types="cypress" />

describe("Verify the Landing Page", () => {
  beforeEach(() => {
    cy.visit("https://upscale.edudev.xyz", { timeout: 10000 });
    cy.url().should("include", "upscale.edudev.xyz");
    cy.get(".btn-login").click();
  });
  it.only("As user, login to website", () => {
    cy.fixture("user").then((user) => {
      const email = user.email;
      const password = user.password;

      //login
      cy.login(email, password);
      cy.wait(2000)
      cy.get("h1").should("be.visible");
    });
  });
  it.only("As user, left all fields in the login form blank", () => {
    cy.get("#email").clear();
    cy.get("#email").type(" ");
    cy.get(".col-lg-8 > #Password").clear();
    cy.get(".col-lg-8 > #Password").type(" ");
    cy.get("#login").click();
    cy.wait(2000)
    cy.contains("Invalid username or password!").should("be.visible");
  });
});

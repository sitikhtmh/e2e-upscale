/// <reference types="cypress" />

describe("Language", () => {
  beforeEach(() => {
    cy.visit("https://upscale.edudev.xyz", { timeout: 10000 });
    cy.url().should("include", "upscale.edudev.xyz");
  });
  it("As User, change ID to EN", () => {
    cy.get(".dropdown > :nth-child(1)").realHover("mouse");
    cy.contains("EN").click();
    cy.contains('ust focus on scaling your business and let us do the "Talent" things').should("be.visible");
  });
});

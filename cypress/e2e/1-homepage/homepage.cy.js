/// <reference types="cypress" />

describe("Verify the Landing Page", () => {
  beforeEach(() => {
    cy.visit("https://upscale.edudev.xyz", { timeout: 10000 });
    cy.url().should("include", "upscale.edudev.xyz");
  });
  it("Validate Homepage UI", () => {
    cy.get(".slide.slide-title1").should("be.visible");
  });
  it('Validate menu "For Bussiness"', () => {
    cy.get(".menu-cnt > :nth-child(1) > :nth-child(2) > a").click();
    cy.url().should("include", "help-business");
    cy.get("h1").should("be.visible");
  });
  it('Validate menu "For Talent"', () => {
    cy.get(".menu-cnt > :nth-child(1) > :nth-child(3) > a").click();
    cy.url().should("include", "help-talent");
    cy.get("h1").should("be.visible");
  });

});

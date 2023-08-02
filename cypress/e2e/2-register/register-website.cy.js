/// <reference types="cypress" />

describe("Verify the Landing Page", () => {
  beforeEach(() => {
    cy.visit("https://upscale.edudev.xyz", { timeout: 10000 });
    cy.url().should("include", "upscale.edudev.xyz");
    cy.get(".btn-login").click();
    cy.get('.col-md-12 > div > .join_community').click();
  });
  it.only("As user, register to website", () => {
    cy.fixture("user").then((user) => {
      const usernameregis = user.usernameregis;
      const emailregis = user.emailregis;
      const passwordregis = user.passwordregis;
      const confirm_passwordregis = user.confirm_passwordregis;
      const country_coderegis = user.country_coderegis;
      const phone_numberregis = user.phone_numberregis;
      const referensiregis = user.phone_referensiregis;

      //login
      cy.registrasi(usernameregis, emailregis, passwordregis, confirm_passwordregis, country_coderegis, phone_numberregis, referensiregis);
      cy.wait(2000);
      //cy.get("h1").should("be.visible");
    });
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#email").clear();
  cy.get("#email").type(email);

  cy.get("#Password").clear();
  cy.get("#Password").type(password);

  cy.get("#login").click();
});

Cypress.Commands.add("registrasi", (usernameregis, emailregis, passwordregis, confirm_passwordregis, country_coderegis, phone_numberregis, referensiregis) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#register_main > :nth-child(1) > .row > .col-md-8 > .form-control").clear();
  cy.get("#register_main > :nth-child(1) > .row > .col-md-8 > .form-control").type(usernameregis);

  cy.get(":nth-child(2) > .row > .col-md-8 > #Email").clear();
  cy.get(":nth-child(2) > .row > .col-md-8 > #Email").type(emailregis);

  cy.get("#register_main > :nth-child(3) > .row > .col-md-8 > .form-control").clear();
  cy.get("#register_main > :nth-child(3) > .row > .col-md-8 > .form-control").type(passwordregis);

  cy.get(":nth-child(4) > .row > .col-md-8 > #Password2").clear();
  cy.get(":nth-child(4) > .row > .col-md-8 > #Password2").type(confirm_passwordregis);

  cy.get("#country_code").clear();
  cy.get("#country_code").type(country_coderegis);
  cy.get(".input-group > #Number").clear();
  cy.get(".input-group > #Number").type(phone_numberregis);

  cy.get("#refrensi").clear();
  cy.get("#refrensi").type(referensiregis);

  cy.get(".btn btn-primary.next-first").click();
});

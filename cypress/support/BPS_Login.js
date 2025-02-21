// cypress/support/login.js
import selectors from "./selectors";

export function login() {
    cy.visit('/');
    cy.get(selectors.loginPage.loginButton).click();

    cy.origin(Cypress.env('loginUrl'), { args: { selectors } }, ({ selectors }) => {
        cy.get(selectors.loginPage.usernameInput).should('be.enabled').type(Cypress.env('username'));
        cy.get(selectors.loginPage.passwordInput).should('be.enabled').type(Cypress.env('password'));
        cy.get(selectors.loginPage.loginSubmit).should('be.visible').should('be.enabled').click();
    });
}

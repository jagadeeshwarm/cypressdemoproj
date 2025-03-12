import selectors from "../selectors";
import DashboardPage from "./dashboardPage";

class HomePage {


  goToBpsSite() {
    cy.visit('/');

  }
  
  login(username, password) {

    cy.get(selectors.loginPage.loginButton).click();
    
    cy.origin(Cypress.env('loginUrl'), { args: { username, password } }, ({ username, password }) => {
      cy.get("#username")
        .should('be.enabled')
        .type(username);  // Use username passed from the test

      cy.get("#password")
        .should('be.enabled')
        .type(password);  // Use password passed from the test

      cy.get("button[type='submit']")
        .should('be.visible')
        .should('be.enabled')
        .click(); 
    });

    return new DashboardPage()
  }
}
export default HomePage;
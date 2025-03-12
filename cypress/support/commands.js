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
import 'cypress-iframe';
import selectors from './selectors';

Cypress.Commands.add('generateProjectName', () => {
    return `PY_cytest_${Math.random().toString(36).slice(2, 7)}`;
  });

  Cypress.Commands.add('clickCanvasCenter', (iframeSelector, canvasSelector) => {
    cy.get(iframeSelector).then(($iframe) => {
      const doc = $iframe.contents().find('body');
  
      cy.wrap(doc)
        .find(canvasSelector)
        .should('be.visible') // Ensure the canvas is loaded
        .then(($canvas) => {
          const width = $canvas.width();
          const height = $canvas.height();
          const centerX = width / 2;
          const centerY = height / 2;
  
          cy.wrap($canvas).click(centerX, centerY);
        });
    });
  });
  
  Cypress.Commands.add("trimValue", (selectedOption) => {
    return cy.wrap(selectedOption.trim().split(/\s+/)[0]);  
});






  
  
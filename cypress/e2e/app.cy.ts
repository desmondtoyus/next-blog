/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="loading"] [p]').contains('Loading');
    // p element contains loading text
    cy.get('p').contains('Loading');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

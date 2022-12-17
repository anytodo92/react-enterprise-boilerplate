import { getCyConfigValue } from 'cypress/helpers/getCyConfigValue';

describe('Home', () => {
  it('Visits home page', () => {
    cy.visit(getCyConfigValue('baseUrl'));
    cy.findByText('Welcome to the Enterprise Boilerplate').should('exist');
  });
});

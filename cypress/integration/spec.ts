import { AddingUsers } from './workflows/adding-user&friends';

it('loads examples', () => {
  cy.visit('/');
  cy.get('button[name=addFriends]').click();
  AddingUsers.addFriends()
});

describe('Friends network e2e tests', () => {
  it('Should load add-friends page', () => {
    cy.visit('/');
    cy.contains('Friends Network');
  });

  it('should be able to open friend from', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.contains('My Network')
  })

  it('submit button should be disabled if form is invalid', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.get('form').should('have.class', 'ng-invalid');
    cy.get('button[type=submit]').should('be.disabled')
  })

  it('submit button should be enabled if form is filled', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    AddingUsers.addFriends()
    cy.get('button[type=submit]').should('not.be.disabled')
  })

});

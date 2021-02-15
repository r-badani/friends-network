import { AddingUsers } from './workflows/adding-user&friends';

describe('Friends network e2e tests', () => {
  it('Should load add-friends page', () => {
    cy.visit('/');
    cy.contains('Friends Network');
  });

  it('should be able to open friend form', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.contains('My Network');
    cy.get('form').should('exist');
  });

  it('should be able to close the friend form', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.get('.c-card__header-closeBtn').click();
    cy.get('form').should('not.exist');
  });

  it('should be able to add more friend form', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.get('section').should("have.length", 4)
    cy.get('button[name=addform]').click();
    cy.get('button[name=addform]').click();
    cy.get('button[name=addform]').click();
    cy.get('section').should("have.length", 7)
  });

  it('submit button should be disabled if form is invalid', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.get('form').should('have.class', 'ng-invalid');
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('submit button should be enabled if form is filled', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    AddingUsers.addFriends();
    cy.get('button[type=submit]').should('not.be.disabled');
  });
});

describe('ngRx store test to', () => {

  it("validates load action", () => {
    // go further and validate the getAllShows$ effect dispatched the getAllSuccess action on appLoaded
    cy.window().then(w => {
        // tap into the store to access the last action and its value
        // @ts-ignore
        const store = w.store;
        const action = store.actionsObserver._value;
        const shows = store.actionsObserver._value.shows;

        // expect action type and length of shows array to match expected values
        expect(action.type).equal("[Friend-Network] load friend records successful");
    });


});

it('after successful load, we should have 11 current users', () => {
  cy.contains('Members in the network: 11')
})

it("Adding friends", () => {
  cy.visit('/');
    cy.get('button[name=addFriends]').click();
    AddingUsers.addFriends();
    AddingUsers.onSubmit();
  // go further and validate the getAllShows$ effect dispatched the getAllSuccess action on appLoaded
  cy.window().then(w => {
      // tap into the store to access the last action and its value
      // @ts-ignore
      const store = w.store;
      const action = store.actionsObserver._value;
      const shows = store.actionsObserver._value.shows;

      // expect action type and length of shows array to match expected values
      expect(action.type).equal("[Add-friend] Adding friends successful");
  });

});
it('after successful add, we should have 4 new users', () => {
  cy.contains('Members in the network: 15')
})

})

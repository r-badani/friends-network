Cypress.Commands.add('addFriends', () => {
  const users = [
    { name: 'Michael Scott 2', age: 30, weight: 140 },
    { name: 'Dwight Schrute 2', age: 30, weight: 110 },
    { name: 'Jim Halpert 2', age: 20, weight: 140 },
    { name: 'Pam Beesly 2', age: 20, weight: 110 },
  ];
  users.forEach((user, i) => {
    cy.get(`input[name="name-${i}"]`).type(user.name);
    cy.get(`input[name="age-${i}"]`).type('' + user.age);
    cy.get(`input[name="weight-${i}"]`).type('' + user.weight);
  });
  cy.get(`button[type="submit"]`).click();
});

describe('Friends network e2e tests', () => {
  it('Should load add-friends page', () => {
    cy.visit('/');
    cy.contains('Friends Network');
  });

  it('should be able to open friend form', () => {
    cy.get('button[name=addFriends]').click();
    cy.contains('My Network');
    cy.get('form').should('exist');
  });

  it('should be able to close the friend form', () => {
    cy.get('.c-card__header-closeBtn').click();
    cy.get('form').should('not.exist');
  });

  it('should be able to add more friend form', () => {
    cy.get('button[name=addFriends]').click();
    cy.get('section').should('have.length', 4);
    cy.get('button[name=addform]').click();
    cy.get('section').should('have.length', 5);
  });

  it('should be able to remove newly added friend form', () => {
    cy.get('section').should('have.length', 5);
    cy.get('button[name=removeForm-4]').click();
    cy.get('section').should('have.length', 4);
  });

  it('submit button should be disabled if form is invalid', () => {
    cy.get('form').should('have.class', 'ng-invalid');
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('submit button should be enabled if form is filled', () => {
    // @ts-expect-error
    cy.addFriends();
    cy.get('button[type=submit]').should('not.be.disabled');
  });
});

describe('ngRx store test to', () => {

  it('validates load action', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    cy.window().then((w) => {
      // @ts-expect-error
      const store = w.store;
      const action = store.actionsObserver._value;
      const shows = store.actionsObserver._value.shows;

      expect(action.type).equal(
        '[Friend-Network] load friend records successful'
      );
    });
  });

  it('after successful load, we should have 11 current users', () => {
    cy.contains('Members in the network: 11');
  });

  it('Adding friends', () => {
    cy.visit('/');
    cy.get('button[name=addFriends]').click();
    // @ts-expect-error
    cy.addFriends();
    cy.window().then((w) => {
      // @ts-expect-error
      const store = w.store;
      const action = store.actionsObserver._value;
      const shows = store.actionsObserver._value.shows;

      expect(action.type).equal('[Add-friend] Adding friends successful');
    });
  });
  it('after successful add, we should have 4 new users', () => {
    cy.contains('Members in the network: 15');
  });
});

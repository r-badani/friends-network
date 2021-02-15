export class AddingUsers {
  static users = [
    { name: 'Michael Scott', age: 30, weight: 140 },
    { name: 'Dwight Schrute', age: 30, weight: 110 },
    { name: 'Jim Halpert', age: 20, weight: 140 },
    {name: 'Pam Beesly', age: 20, weight: 110 },
  ];

  static addFriends() {
    this.users.forEach((user, i) => {
      cy.get(`input[name="name-${i}"]`).type(user.name)
      cy.get(`input[name="age-${i}"]`).type(''+user.age)
      cy.get(`input[name="weight-${i}"]`).type(''+user.weight)
    });
  }


  static onSubmit(): void {
    cy.get(`button[type="submit"]`).click()
  }
}

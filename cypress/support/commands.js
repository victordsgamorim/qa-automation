Cypress.Commands.add('login', (email, password) => {
    // cy.get('input[data-test=loginUserName]').type('victordsgamorim');
    // cy.get('input[data-test=loginUserName]').type('victordsgamorim');
});

Cypress.Commands.add('visitPage', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
})
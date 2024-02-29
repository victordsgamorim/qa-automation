Cypress.Commands.add('visitPage', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
})

Cypress.Commands.add('login', () => {
    cy.get('input[data-test=loginUserName]').type('victordsgamorim')
    cy.get('input[data-test=loginPassword]').type('123456789')
    cy.get('[data-test=loginBtn]').click()
})

Cypress.Commands.add('logout', () => {
    cy.contains('(Logout)').click()
})
import Login from '../support/pages/login/login-page.js';

describe('Login invalid credentials', () => {
    beforeEach(() => {
        Login.visit();

    })

    it('should show error message when fields are empty', () => {
        Login.verifyErrorMessages();
    });

    it('should return error when status code is 400', () => {
        cy.intercept('POST',
            'https://alurapic-api.onrender.com/user/login',
            { statusCode: 400 }
        ).as('loginErrorMock');

        cy.login();
        cy.wait('@loginErrorMock').its('response.statusCode').should('eq', 400)
    })
});

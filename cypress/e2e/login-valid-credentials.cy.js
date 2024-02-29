import Login from '../support/pages/login/login-page.js'

describe('Login valid credentials', () => {
    beforeEach(() => {
        Login.visit();
    })

    it('should not show error message when fields are filled', () => {
        Login.fillLoginFields();
        Login.verifyErrorMessages(false);
    });

    it('should login when credentials are correct and logout after 500 milliseconds', () => {
        Login.loginAndLogout();
    })

    it('should return status code 200 when credential are correct', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }
        ).then((response) => {
            expect(response.status).to.be.equal(200)
        });
    })
});

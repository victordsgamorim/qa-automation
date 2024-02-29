import Login from '../support/pages/login/login-page.js'

describe('Login', () => {
    beforeEach(() => {
        Login.visit();
    })

    it('should show error message when fields are empty', () => {
        Login.verifyErrorMessages();
    });

});

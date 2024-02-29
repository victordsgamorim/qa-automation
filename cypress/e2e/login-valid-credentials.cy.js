import Login from '../support/pages/login/login-page.js'

describe('Login', () => {
    beforeEach(() => {
        Login.visit();
    })

    it('should not show error message when fields are filled', () => {
        Login.fillLoginFields();
        Login.verifyErrorMessages(false);
    });
});

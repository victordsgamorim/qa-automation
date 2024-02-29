import Register from '../support/pages/register/register-page.js'

describe('Register', () => {

    beforeEach(() => {
        Register.moveToRegisterPage();
    })

    it('should show error messages when clicking the register button with empty fields', () => {
        Register.registerButtonClick();
        Register.registerButtonClick();
        Register.verifyErrorMessages();
    })

    it('should show [Username already taken] when creating duplicated user', () => {
        Register.fillRegisterField('victordsgamorim');
        Register.userNameAvailabilityMessage(true);
    })

    it('should show [Minimum length is 8] message when password length is smaller', () => {
        Register.verifyPasswordLength('1234',true);
    })

    it('Should show an error when email pattern is incorrect', () => {
        Register.emailPattern("emailgmail.com", 'not.match');
    })
})
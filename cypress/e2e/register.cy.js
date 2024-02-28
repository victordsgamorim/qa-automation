import Register from '../support/pages/register/register-page'

describe('Register', () => {

  beforeEach(() => {
    Register.moveToRegisterPage();
  })

  it('should show error messages when clicking the register button with empty fields', () => {
    Register.registerButtonClick();
    Register.registerButtonClick();
    Register.verifyErrorMessages();
  })

  it('should show [User available] when creating new user', () => {
    Register.fillRegisterField('victordsgamorim2');
    Register.userNameAvailabilityMessage();
  })

  it('should show [Username already taken] when creating duplicated user', () => {
    Register.fillRegisterField('victordsgamorim');
    Register.userNameAvailabilityMessage(true);
  })

  it('Should work when inserting right email pattern', () => {
    Register.emailPattern("email@gmail.com", 'match');
  })

  it('Should show an error when email pattern is incorrect', () => {
    Register.emailPattern("emailgmail.com", 'not.match');
  })
})
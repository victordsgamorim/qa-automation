import Register from '../support/pages/register/register-page.js'

describe('Register', () => {

  beforeEach(() => {
    Register.moveToRegisterPage();
  })

  it('should show [User available] when creating new user', () => {
    Register.fillRegisterField('victordsgamorim2');
    Register.userNameAvailabilityMessage();
  })

  it('should work when inserting right email pattern', () => {
    Register.emailPattern("email@gmail.com", 'match');
  })

  it('should not show [Minimum length is 8] when password is eq or greater than 8', () => {
    Register.verifyPasswordLength('123456789');
  })
})
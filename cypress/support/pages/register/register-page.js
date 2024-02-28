const el = require('./elements').ELEMENTS;

class Register {

    moveToRegisterPage() {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.get(el.registerButtonNow).click()
    }

    registerButtonClick() {
        cy.get(el.registerButton).click()
    }

    verifyErrorMessages() {
        cy.contains(el.emailRequiredMessage).should('be.visible')
        cy.contains(el.nameRequiredMessage).should('be.visible')
        cy.contains(el.userNameRequiredMessage).should('be.visible')
        cy.contains(el.passwordRequiredMessage).should('be.visible')
    }

    userNameAvailabilityMessage(isError = false) {
        if (isError) {
            return cy.contains(el.notAvailableUserMessage).should('be.visible');
        }
        return cy.contains(el.availableUserMessage).should('be.visible');

    }

    fillRegisterField(username) {
        cy.get(el.emailField).type('victor@gmail.com')
        cy.get(el.fullNameField).type('Victor Amorim')
        cy.get(el.userNameField).type(username)
        cy.get(el.passwordField).type('123456789');
    }

    emailPattern(email, isMatch) {
        cy.get(el.emailField)
            .type(email)
            .invoke('val')
            .should(isMatch, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
}

export default new Register();
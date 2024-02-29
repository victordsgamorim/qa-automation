const el = require('./elements.js').ELEMENTS;

class Login {
    visit() {
        cy.visitPage();
    }

    verifyErrorMessages(isVisible = true) {
        const visibility = isVisible ? 'be.visible' : 'not.exist';
        cy.contains(el.usernameRequiredMessage).should(visibility);
        cy.contains(el.passwordRequiredMessage).should(visibility);
    }

    fillLoginFields() {
        cy.get(el.emailField).type("victordsgamorim");
        cy.get(el.passwordField).type("123456789");
    }

}

export default new Login();
export class Login {
    navigate () {
        cy.visit ('https://www.edu.goit.global/account/login')
    }
    completeUserEmail() {
        cy.get('#user_email').type ('user888@gmail.com')
      }
    completeUserPassword() {
        cy.get('#user_password').type('1234567890')
    }  
    logIn() {
        cy.get('.eckniwg2').click()
    }

}
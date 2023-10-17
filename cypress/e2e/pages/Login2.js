export class Login2 {
    navigate () {
        cy.visit ('https://www.edu.goit.global/account/login')
    }
    completeUserEmail() {
        cy.get('#user_email').type ('testowyqa@qa.team')
      }
    completeUserPassword() {
        cy.get('#user_password').type ('QA!automation-1')
    }  
    logIn() {
        cy.get('.eckniwg2').click()
    }

}
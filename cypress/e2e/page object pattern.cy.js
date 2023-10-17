import { Login } from"./pages/Login"

const LoginPage = new Login ()

describe("Page object pattern example", () => {

  it("Login page test1", () => {

      cy.visit('https://www.edu.goit.global/account/login')
      //LoginPage.navigate()

      cy.get('#__next > div > div > div > div > h2').should('be.visible')
      cy.get('#__next > div > div > div > div > h2').should('have.text', 'Login')

      cy.get('#user_email').should('be.visible')

      cy.get('#user_password').should('be.visible')

      cy.get('[type="submit"]').should('be.visible')
      cy.get('[type="submit"]').should('have.text', 'Log in')

      cy.get('.next-1qrvie4.e48fpw0').first().should('be.visible')
      cy.get('.next-1qrvie4.e48fpw0').first().should('have.text', 'I can\'t remember the password')
  })
})


//import { Login } from "./pages/Login"

// let loginPage

// before( () => {
//     loginPage = new Login()
// })

// describe("Page object pattern example", () => {

//     it("Login page test2", () => {

//         //visit page
//         loginPage.navigate()

//         //check title
//         loginPage.validateLoginTitle()
        
//         //check inputs
//         loginPage.validateInputs()

//         //check button
//         loginPage.validateButton()

//         //check link
//         loginPage.validatePasswordLink()

//     })
// })
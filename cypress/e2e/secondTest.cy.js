describe('Drugi blok testów', () => {
  it('Wpisywanie maila, hasła i logowanie', () => {
    cy.visit('https://www.edu.goit.global/account/login')
    cy.get('#user_email').type ('testowyqa@qa.team')
    cy.get('#user_password').type ('QA!automation-1')
    cy.get('.eckniwg2').click()
    cy.get('#open-navigation-menu-mobile').click()
    cy.get('nav[role=menu] :last-child > .next-bve2vl').click()
  })
  
})
export class HomePage2{
    openMenu() {
        cy.get('#open-navigation-menu-mobile').click()
    }

    logOut() {
        cy.get('nav[role=menu] :last-child > .next-bve2vl').click()
    }
}
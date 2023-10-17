export class HomePage{
    openMenu() {
        cy.get('#open-navigation-menu-mobile').click()
    }

    logOut() {
        cy.get(':nth-child(11) > .next-bve2vl').click()
    }
}
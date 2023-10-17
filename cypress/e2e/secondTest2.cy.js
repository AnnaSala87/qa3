import { Login2 } from "./pages/Login2"
import { HomePage2 } from "./pages/HomePage2"

const loginPage = new Login2();
const homePage = new HomePage2();

describe("Page object pattern example", () => {

    it("Login page test", () => {

      loginPage.navigate()

      loginPage.completeUserEmail()

      loginPage.completeUserPassword()

      loginPage.logIn()

      homePage.openMenu()

      homePage.logOut()
    })
})
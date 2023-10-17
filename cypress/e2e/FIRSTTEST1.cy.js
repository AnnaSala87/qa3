import { Login } from "./pages/Login"
import { HomePage } from "./pages/HomePage"

const loginPage = new Login();
const homePage = new  HomePage();

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
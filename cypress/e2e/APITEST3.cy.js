describe('HTTP TESTS API', () => {

    const bodyData = {
        bodyKey: "bodyValue"
    }
  
    const requestCOOKIES = {
        method: 'GET',
        url: 'https://httpbin.org/cookies',
        body: bodyData,
        failOnStatusCode: false
    }


    it('Test API COOKIES', () => {
        cy.request(requestCOOKIES).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.notStrictEqual(bodyData, response.body.data)
        })
    })
})
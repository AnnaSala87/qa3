describe('HTTP TESTS API', () => {

  const bodyData = {
      bodyKey: "bodyValue"
  }

  const requestPOST = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: bodyData,
      failOnStatusCode: false
  }

  const requestGET = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      qs: {
          "key": "value"
      },
      failOnStatusCode: false
  }

  const requestHeaders = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
          "user-agent": "My test user-agent"
      },
      failOnStatusCode: false
  }

  const requestHeaders1= {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      "customHeader": "customValue"
    },
    failOnStatusCode: false
}
  const requestDELETE = {
    method: 'DELETE',
    url: 'https://httpbin.org/delete',
    body: bodyData,
    failOnStatusCode: false
}

const requestPATCH = {
  method: 'PATCH',
  url: 'https://httpbin.org/patch',
  body: bodyData,
  failOnStatusCode: false
}

const requestIP = {
  method: 'GET',
  url: 'https://httpbin.org/ip',
  body: bodyData,
  failOnStatusCode: false
}

const requestCOOKIES = {
  method: 'GET',
  url: 'https://httpbin.org/cookies',
  body: bodyData,
  failOnStatusCode: false
}

  it('Test API POST', () => {
      cy.request(requestPOST).then(response => {
          const status = response.status
          assert.equal(200, status)
          assert.notStrictEqual(bodyData, response.body.data)
      })
  })

  it('Test API GET', () => {
      cy.request(requestGET).then(response => {
          const status = response.status
          assert.equal(200, status)
          assert.equal("value", response.body.args.key)
      })
  })

  it('Test API DELETE', () => {
    cy.request(requestDELETE).then(response => {
        const status = response.status
        assert.equal(200, status)
        assert.notStrictEqual(bodyData, response.body.data)
    })
})

it('Test API PATCH', () => {
  cy.request(requestPATCH).then(response => {
      const status = response.status
      assert.equal(200, status)
      assert.notStrictEqual(bodyData, response.body.data)
  })
})


  it('Test API Headers', () => {
      cy.request(requestHeaders).then(response => {
          const status = response.status
          assert.equal(200, status)
          assert.equal("My test user-agent", response.requestHeaders['user-agent'])
      })
  })

  it('Test API Headers1', () => {
    cy.request(requestHeaders1).then(response => {
        const status = response.status
        assert.equal(200, response.status);
        assert.equal("customValue", response.requestHeaders.customHeader);
    })
})

it('Test API IP', () => {
  cy.request(requestIP).then(response => {
      const status = response.status
      assert.equal(200, status)
      assert.notStrictEqual(bodyData, response.body.data)
  })
})

it('Test Duration', () => {

  cy.request(requestPOST).then(response => {
      const durationCurrent = response.duration
      assert.isTrue(durationCurrent <= 500, 'Time was too long: ' + durationCurrent)
  })

  })

  it('Test API COOKIES', () => {
    cy.request(requestCOOKIES).then(response => {
        const status = response.status
        assert.equal(200, status)
        assert.notStrictEqual(bodyData, response.body.data)
    })
})

it('test random ids', () => {
  for(let i = 0; i < 10; i++) {
    const randomId = getRandomInt(10000000);

    const request = {
      url: 'https://httpbin.org/headers',
      id: randomId
    }

    cy.request(request).then(response => {
      assert.isTrue(response.status == 200)
    })
  } 
})
})

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}



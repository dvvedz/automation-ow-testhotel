const { createPartiallyEmittedExpression, OperationCanceledException } = require("typescript");

Cypress.Commands.add("login", () => {
    cy.request({
        method: "POST",
        url: "/api/login", 
        body: {"username":"oskar","password":"oskar123"}
    }).then((res) => {
        let storageValue = `{"user": {"username":"${res.body.username}", "token":"${res.body.token}"}}`
        window.localStorage.setItem("tester-hotel", storageValue)
    });
});

Cypress.Commands.add("createRoomApi", () => {
    cy.request({
        method: "POST",
        url: "/api/room/new",
        body: `{"features":["penthouse"],"category":"twin","number":"0","floor":"0","available":true,"price":"99"}`,
        headers: { 
            "X-User-Auth": `${JSON.stringify(JSON.parse(window.localStorage.getItem("tester-hotel")).user)}` // well well :)
        }
    })
});
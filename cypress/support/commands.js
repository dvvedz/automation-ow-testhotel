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

/**
    * @param {string} cat_val 
    * @param {int} num_val 
    * @param {int} floor_val 
    * @param {int} price_val 
    * @param {array} feat_val 
    * @param {boolean} available_val 
*/
Cypress.Commands.add("createRoomApi", (cat_val, num_val, floor_val, price_val, feat_val, available_val) => {
    cy.request({
        method: "POST",
        url: "/api/room/new",
        body: {features: feat_val, category: cat_val, number: num_val, floor: floor_val, available: available_val, price: price_val},
        headers: { 
            "X-User-Auth": `${JSON.stringify(JSON.parse(window.localStorage.getItem("tester-hotel")).user)}` // well well :)
        }
    })
});
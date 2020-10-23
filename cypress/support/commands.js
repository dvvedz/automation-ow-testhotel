// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

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
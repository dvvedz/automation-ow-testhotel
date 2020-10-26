const { visitEachChild } = require("typescript");

import {CreateRoom} from "./util-room-page"

describe("Edit room", () => {
    // Const's
    beforeEach(() => {
        cy.login(); // logs the user in with api
        cy.createRoomApi(); // creates a room with help from the api
    })
    it("Does stuff", () => {
        cy.visit("/rooms");
    });
});
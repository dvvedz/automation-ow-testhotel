const { visitEachChild } = require("typescript");

import { EditRoom } from "../models/rooms-page-util"
import { CreateRoom } from "../models/rooms-page-util"

describe("Edit room", () => {
    const er = new EditRoom("single", 1111, 1111, 1111, ["penthouse"], false);
    const cr = new CreateRoom("single", 1111, 1111, 1111, ["penthouse"], false);
    // these two instances need to have the same arguments 
    // thats because we are using the method roomIsCreated
    // from CreateRoom class, to check if the last room contains the values

    beforeEach(() => {
        cy.login(); // logs the user in with api
    })
    it("Edits room", () => {
        cy.createRoomApi("twin", 1337, 1337, 1337, ["penthouse"], true); // creates a room with help from the api
        er.edit();
    });
    it("Checks if edit was succesfull", () => {
        cr.roomIsCreated(); // Reusing method from CreateRoom class to check if room was edited correctly
    }) 
});
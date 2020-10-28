const { visitEachChild } = require("typescript");

import { EditRoom } from "../models/rooms-page-util"

describe("Edit room", () => {
    // cat_val, num_val, floor_val price_val, feat_val, available_val
    // let cr = new CreateRoom();
    const er = new EditRoom();
    const cr = new CreateRoom("twin", "99", "99", "999", ["penthouse"], "true");
    beforeEach(() => {
        cy.login(); // logs the user in with api
        cy.createRoomApi(); // creates a room with help from the api
    })
    it("Edits room", () => {
        er.edit();
    });
    it("Checks if edit was succesfull", () => {

    }) 
});
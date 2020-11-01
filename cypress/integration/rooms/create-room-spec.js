const { urlencoded } = require("body-parser");
const { isExportDeclaration } = require("typescript");

import { CreateRoom } from "../models/rooms-page-util"

describe("Create a room", () => {
    // cat_val, num_val, floor_val price_val, feat_val, available_val
    let CR = new CreateRoom("twin", 99, 99, 999, ["penthouse"], true);
    beforeEach(() => {
        cy.login();
    });
    it("Create a new room", () => {
        CR.create();
    });
    it("Checks if room was created correctly", () => {
        CR.roomIsCreated();
    });
});
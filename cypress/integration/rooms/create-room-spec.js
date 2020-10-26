const { urlencoded } = require("body-parser");
const { isExportDeclaration } = require("typescript");

import { CreateRoom } from "./util-room-page"

describe("Room", () => {
    let CR = new CreateRoom();

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
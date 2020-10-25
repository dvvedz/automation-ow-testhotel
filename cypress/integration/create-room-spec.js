const { urlencoded } = require("body-parser");
const { isExportDeclaration } = require("typescript");

describe("Rooms", () => {
    const CREATE_ROOM_BTN = "h2 > .btn";
    const CAT_FIELD = ":nth-child(1) > select";
    const NUM_FIELD = ":nth-child(2) > input";
    const FLOOR_FIELD = ":nth-child(3) > input";
    const PRICE_FIELD = ":nth-child(5) > input";
    const FEAT_FIELD = ":nth-child(6) > select";
    const SAVE_BTN = ".blue";

    beforeEach(() => {
        cy.login();
    });

    it("Create a new room", () => {
        cy.visit("/rooms");
        cy.get(CREATE_ROOM_BTN).click();
        cy.get(CAT_FIELD).select("Twin").should("have.value", "twin");
        cy.get(NUM_FIELD).type(99);
        cy.get(FLOOR_FIELD).type(101);
        cy.get(".checkbox").click()
        cy.get(PRICE_FIELD).type(9999);
        cy.get(FEAT_FIELD).select("penthouse");
        cy.get(SAVE_BTN).click();
        cy.visit("/rooms")
        // TODO: Check if the room was created correctly 
    });
});
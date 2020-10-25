const { urlencoded } = require("body-parser");
const { isExportDeclaration } = require("typescript");

describe("Rooms", () => {
    // home page
    const CREATE_ROOM_BTN = "h2 > .btn";
    // create room (/room/new)
    const CAT_FIELD = ":nth-child(1) > select";
    const NUM_FIELD = ":nth-child(2) > input[type=number]";
    const FLOOR_FIELD = ":nth-child(3) > input[type=number]";
    const AVAILABLE_CHECK = ".checkbox";
    const PRICE_FIELD = ":nth-child(5) > input[type=number]";
    const FEAT_FIELD = ":nth-child(6) > select";
    const SAVE_BTN = ".blue";
    // rooms page (/rooms)
    const ROOM_CONT = ".rooms .card";
    // values
    const CAT_VAL = "Twin";
    const NUM_VAL = 99;
    const FLOOR_VAL = 101;
    const PRICE_VAL = 9999;
    const FEAT_VAL = ["penthouse"];
    const AVAILABLE_VAL = "true"

    beforeEach(() => {
        cy.login();
    });
    it("Create a new room", () => {
        cy.visit("/rooms");
        cy.get(CREATE_ROOM_BTN).click();
        cy.get(CAT_FIELD).select(CAT_VAL).should("have.value", "twin");
        cy.get(NUM_FIELD).type(NUM_VAL).should("have.value", 99);
        cy.get(FLOOR_FIELD).type(FLOOR_VAL).should("have.value", 101);
        cy.get(AVAILABLE_CHECK).click().contains(" ✓ ");
        cy.get(PRICE_FIELD).type(PRICE_VAL).should("have.value", 9999);
        cy.get(FEAT_FIELD).select(FEAT_VAL).invoke("val").should("deep.equal", ["penthouse"])
        cy.get(SAVE_BTN).contains("Save").click();
    });
    it("Checks if room was created", () => {
        cy.visit("/rooms");
        cy.get(ROOM_CONT).last()
        .contains(CAT_VAL, { matchCase: false }).should("have.class", "category");
        cy.get(ROOM_CONT).last()
        .contains(NUM_VAL, {mathCase: false});
        cy.get(ROOM_CONT).last()
        .contains(AVAILABLE_VAL, {mathCase: false});
        cy.get(ROOM_CONT).last()
        .contains(PRICE_VAL, {mathCase: false});
        cy.get(ROOM_CONT).last()
        .contains(FEAT_VAL[0], {mathCase: false});
        cy.get(ROOM_CONT).last()
        .contains(FLOOR_VAL, {mathCase: false});
    });
    // TODO: Check if the room was created correctly 
});
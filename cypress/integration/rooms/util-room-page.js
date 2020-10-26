export class CreateRoom {
    constructor() {
        this.CREATE_ROOM_BTN = "h2 > .btn";
        // create room (/room/new)
        this.CAT_FIELD = ":nth-child(1) > select";
        this.NUM_FIELD = ":nth-child(2) > input[type=number]";
        this.FLOOR_FIELD = ":nth-child(3) > input[type=number]";
        this.AVAILABLE_CHECK = ".checkbox";
        this.PRICE_FIELD = ":nth-child(5) > input[type=number]";
        this.FEAT_FIELD = ":nth-child(6) > select";
        this.SAVE_BTN = ".blue";
        // rooms page (/rooms)
        this.ROOM_CONT = ".rooms .card"
        // values
        this.CAT_VAL = "Twin";
        this.NUM_VAL = 99;
        this.FLOOR_VAL = 101;
        this.PRICE_VAL = 9999;
        this.FEAT_VAL = ["penthouse"];
        this.AVAILABLE_VAL = "true"
    }
    create() {
        cy.visit("/rooms");
        cy.get(this.CREATE_ROOM_BTN).click();
        cy.get(this.CAT_FIELD).select(this.CAT_VAL).should("have.value", "twin");
        cy.get(this.NUM_FIELD).type(this.NUM_VAL).should("have.value", 99);
        cy.get(this.FLOOR_FIELD).type(this.FLOOR_VAL).should("have.value", 101);
        cy.get(this.AVAILABLE_CHECK).click().contains(" ✓ ");
        cy.get(this.PRICE_FIELD).type(this.PRICE_VAL).should("have.value", 9999);
        cy.get(this.FEAT_FIELD).select(this.FEAT_VAL).invoke("val").should("deep.equal", ["penthouse"])
        cy.get(this.SAVE_BTN).contains("Save").click();
    };
    roomIsCreated()  {
        cy.visit("/rooms");
        cy.get(this.ROOM_CONT).last()
        .contains(this.CAT_VAL, { matchCase: false }).should("have.class", "category");
        cy.get(this.ROOM_CONT).last()
        .contains(this.NUM_VAL, {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(this.AVAILABLE_VAL, {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(this.PRICE_VAL, {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(this.FEAT_VAL[0], {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(this.FLOOR_VAL, {matchCase: false});
    };
};

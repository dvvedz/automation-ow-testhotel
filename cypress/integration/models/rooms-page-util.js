export class CreateRoom {
    /**
     * This class creates a new room and checks if it was created correctly
     * @constructor
     * @param {string} cat_val 
     * @param {string} num_val 
     * @param {string} floor_val 
     * @param {string} price_val
     * @param {array} feat_val 
     * @param {boolean} available_val 
     */
    constructor(cat_val, num_val, floor_val, price_val, feat_val, available_val) {
        this.CREATE_ROOM_BTN = "h2 > .btn";
        // create room page (/room/new)
        this.CAT_FIELD = ":nth-child(1) > select";
        this.NUM_FIELD = ":nth-child(2) > input[type=number]";
        this.FLOOR_FIELD = ":nth-child(3) > input[type=number]";
        this.AVAILABLE_CHECK = ".checkbox";
        this.PRICE_FIELD = ":nth-child(5) > input[type=number]";
        this.FEAT_FIELD = ":nth-child(6) > select";
        this.SAVE_BTN = ".blue";
        // rooms page (/rooms)
        this.ROOM_CONT = ".rooms .card";
        // values
        this.CAT_VAL = cat_val;
        this.NUM_VAL = num_val;
        this.FLOOR_VAL = floor_val;
        this.PRICE_VAL = price_val;
        this.FEAT_VAL = feat_val;
        this.AVAILABLE_VAL = available_val;
    }
    /**
     * Creates a room
     */
    create() {
        cy.visit("/rooms");
        cy.get(this.CREATE_ROOM_BTN).click();
        cy.get(this.CAT_FIELD).select(this.CAT_VAL);
        cy.get(this.NUM_FIELD).type(this.NUM_VAL);
        cy.get(this.FLOOR_FIELD).type(this.FLOOR_VAL);
        cy.get(this.AVAILABLE_CHECK).click().contains(" ✓ ");
        cy.get(this.PRICE_FIELD).type(this.PRICE_VAL);
        cy.get(this.FEAT_FIELD).select(this.FEAT_VAL);
        cy.get(this.SAVE_BTN).contains("Save").click();
    }
    /**
     * Checks if room was created correctly
     * @TODO create better checks
     */
    roomIsCreated()  {
        cy.visit("/rooms");
        cy.get(this.ROOM_CONT).last()
        .contains(this.CAT_VAL, { matchCase: false });
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
    }
}

export class EditRoom {
    constructor() {
        this.cr = new CreateRoom();
        this.DOTS = ".action";
        this.EDIT_BTN = ".menu > :nth-child(1)";
        this.PAGE_TITLE = "h2";
        this.CAT_FIELD = ":nth-child(3) > select",
        this.NUM_FIELD = ":nth-child(4) > input[type=number]";
        this.FLOOR_FIELD = ":nth-child(5) > input[type=number]";
        this.PRICE_FIELD = ":nth-child(7) > input[type=number]";
        this.FEAT_FIELD = ":nth-child(8) > select";
        // Values
        this.CAT_VAL = cat_val;
        this.NUM_VAL = num_val;
        this.FLOOR_VAL = floor_val;
        this.PRICE_VAL = price_val;
        this.FEAT_VAL = feat_val;
        this.AVAILABLE_VAL = available_val;
    }
    edit() {
        cy.visit("/rooms");
        cy.get(this.cr.ROOM_CONT).last().children(this.DOTS).click();
        cy.get(this.EDIT_BTN).click();
        cy.get(this.PAGE_TITLE).should("contain", "Room")
        .and("contain", "Delete");
        cy.get(this.CAT_FIELD).select(this.CAT_VAL);
        cy.get(this.NUM_FIELD).type('{backspace}1337');
        cy.get(this.FLOOR_FIELD).type('{backspace}1337');
        cy.get(this.cr.AVAILABLE_CHECK).click().contains(" ✓ ")
        cy.get(this.PRICE_FIELD).type('{backspace}1337');
        cy.get(this.FEAT_FIELD).select(this.FEAT_VAL);
        cy.get(this.cr.SAVE_BTN).contains("Save").click();
    }
}
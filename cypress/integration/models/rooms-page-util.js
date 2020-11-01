export class CreateRoom {
    /**
     * This class creates a new room and checks if it was created correctly
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
     * Checks if the last item in the room container contains values from the create method
     * and the edit method in class EditRoom
     * @TODO create better checks
     */
    roomIsCreated()  {
        cy.visit("/rooms");
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.CAT_VAL), { matchCase: false });
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.NUM_VAL), {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.AVAILABLE_VAL), {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.PRICE_VAL), {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.FEAT_VAL[0]), {matchCase: false});
        cy.get(this.ROOM_CONT).last()
        .contains(String(this.FLOOR_VAL), {matchCase: false});
    }
}

export class EditRoom {
    /**
     * @param {string} cat_val 
     * @param {int} num_val 
     * @param {int} floor_val 
     * @param {int} price_val 
     * @param {array} feat_val 
     * @param {boolean} available_val 
     */
    constructor(cat_val, num_val, floor_val, price_val, feat_val, available_val) {
        // init instance
        this.cr = new CreateRoom(); // Use variables from CreateRoom
        // Elements
        this.ROOM_CONT = this.cr.ROOM_CONT;
        this.AVAILABLE_CHECK = this.cr.AVAILABLE_CHECK;
        this.SAVE_BTN = this.cr.SAVE_BTN;
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
    /**
     * This method edits the last item in the room container
     */
    edit() {
        cy.visit("/rooms");
        cy.get(this.ROOM_CONT).last().children(this.DOTS).click();
        cy.get(this.EDIT_BTN).click();
        cy.get(this.PAGE_TITLE).should("contain", "Room")
        .and("contain", "Delete");
        cy.get(this.CAT_FIELD).select(this.CAT_VAL);
        cy.get(this.NUM_FIELD).clear().type(this.NUM_VAL);
        cy.get(this.FLOOR_FIELD).clear().type(this.FLOOR_VAL);
        cy.get(this.AVAILABLE_CHECK).click();
        cy.get(this.PRICE_FIELD).clear().type(this.PRICE_VAL);
        cy.get(this.FEAT_FIELD).select(this.FEAT_VAL);
        cy.get(this.SAVE_BTN).contains("Save").click();
    }
}

export class DeleteRoom {
    constructor() {
        // init Instance
        this.er = new EditRoom(); // only using init var from EditRoom
        this.DOTS = this.er.DOTS;
        this.ROOM_CONT = this.er.ROOM_CONT
        this.DEL_BTN = ".menu > :nth-child(2)"
    }
    delete() {
        cy.visit("/rooms")
        cy.get(this.ROOM_CONT).last().children(this.DOTS).click();
        cy.get(this.DEL_BTN).click();
    }
}


export class CreateClient {
    constructor(name_val, email_val, tel_val) {
        this.CREATE_CLIENT_BTN = "h2 > .btn";
        this.PAGE_HEADER = "h2 > div";
        this.NAME_FIELD = ":nth-child(1) > input";
        this.EMAIL_FIELD = ":nth-child(2) > input";
        this.TEL_FIELD = ":nth-child(3) > input";
        this.SAVE_BTN = ".blue";
        this.CLIENTS_CONT = ".clients .card"
        // Values
        this.NAME_VAL = name_val;
        this.EMAIL_VAL = email_val
        this.TEL_VAL = tel_val
    }
    create() {
        cy.visit("/clients")
        cy.get(this.CREATE_CLIENT_BTN).should("contain", "Create Client").click()
        cy.get(this.PAGE_HEADER).should("contain", "New Client")
        cy.get(this.NAME_FIELD).type(this.NAME_VAL);
        cy.get(this.EMAIL_FIELD).type(this.EMAIL_VAL);
        cy.get(this.TEL_FIELD).type(this.TEL_VAL);
        cy.get(this.SAVE_BTN).should("contain", "Save").click();
        cy.get(this.CLIENTS_CONT).last().should("contain", this.NAME_VAL)
        .and("contain", this.EMAIL_VAL)
        .and("contain", this.TEL_VAL)
    }
}
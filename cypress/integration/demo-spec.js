const { urlencoded } = require("body-parser");
const { isExportDeclaration } = require("typescript");

describe("Rooms", () => {
    const ROOMS_BTN = ":nth-child(1) > .btn";

    beforeEach(() => {
        cy.login()
    })
    it("Cliks on the room button at index page", () => {
        cy.visit("/")
        cy.get(ROOMS_BTN).click()
    });
});
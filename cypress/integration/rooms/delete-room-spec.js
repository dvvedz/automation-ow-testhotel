import { DeleteRoom } from "../models/rooms-page-util"

describe("Delete a room", () => {
    // init
    const dr = new DeleteRoom()

    beforeEach(() => {
        cy.login()
    })
    it("Creates room with api request and then e2e deleting that room", () => {
        cy.createRoomApi("twin", 1337, 1337, 1337, ["penthouse"], true);
        dr.delete();
    })
});
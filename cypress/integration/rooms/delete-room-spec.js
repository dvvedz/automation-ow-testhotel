import { DeleteRoom } from "../models/rooms-page-util"

describe("Delete a room", () => {
    // init
    const dr = new DeleteRoom()

    beforeEach(() => {
        cy.login()
    })
    it("Does", () => {
        cy.createRoomApi()
        dr.delete() 
    })
});
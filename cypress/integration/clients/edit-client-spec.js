
import { visitEachChild } from "typescript";
import { CreateClient, EditClient } from "../models/clientes-page-util"

describe("Edit client", () => {
    const ec = new EditClient("TestEdit", "TestEdit@mail.com", "0123456789")
    const cc = new CreateClient("TestEdit", "TestEdit@mail.com", "0123456789")

    beforeEach(() => {
        cy.login()
    })
    it("Edits a client", () => {
        cy.createClientApi("createdFrom Api", "test@mail.com", "012345678");
        ec.edit()
        cc.isCreated()
    });
});
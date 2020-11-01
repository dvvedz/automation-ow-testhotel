import { CreateClient } from "../models/clientes-page-util"

describe("Create a cliente", () => {
    const cc = new CreateClient("TestClient", "testClient@mail.com", "012345678")

    beforeEach(() => {
        cy.login()
    });
    it("Create client", () => {
        cc.create() 
    });
});

describe("Client Profile", () => {
  it("should save changes", () => {
    cy.visit("/profile");
    cy.location("pathname").should("eq", "/profile");

    cy.get('input[autocomplete="name"]').clear().type("Antonio");

    cy.contains("button", "Guardar Cambios").click();
    cy.contains("button", "Guardado").should("be.visible");

    cy.window().then((win) => {
      const raw = win.localStorage.getItem("clientProfile");
      expect(raw).to.not.be.null;
      expect(JSON.parse(raw as string).name).to.eq("Antonio");
    });
  });
});
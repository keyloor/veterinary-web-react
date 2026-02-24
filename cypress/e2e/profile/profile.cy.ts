describe("Client Profile", () => {
  beforeEach(() => {
    cy.visit("/profile");
  });

  it("should save changes", () => {
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
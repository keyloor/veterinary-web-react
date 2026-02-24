describe("PetCard", () => {
  it("should show Tessa as Saludable", () => {
    cy.visit("/pets");
    cy.location("pathname").should("include", "/pets");

    cy.contains("h3", "Tessa")
      .should("be.visible")
      .parentsUntil("section")
      .contains("Saludable")
      .should("be.visible");
  });
});
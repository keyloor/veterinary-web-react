describe("Client Profile - Visualization", () => {
  it("should display name, email, and phone in editable fields when the screen loads", () => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        "clientProfile",
        JSON.stringify({
          name: "María León",
          email: "maria.leon@vetcare.com",
          phone: "8888-8888",
        })
      );
    });

    cy.visit("/profile");
    cy.location("pathname").should("eq", "/profile");
    
    cy.get('input[autocomplete="name"]')
      .should("be.visible")
      .and("have.value", "María León");

    cy.get('input[autocomplete="email"]')
      .should("be.visible")
      .and("have.value", "maria.leon@vetcare.com");

    cy.get('input[autocomplete="tel"]')
      .should("be.visible")
      .and("have.value", "8888-8888");
  });
});
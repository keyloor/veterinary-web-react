describe('Header Navigation', () => {
    it('should display texts correctly', () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");

        cy.getBySel("header").contains('VetCare');
        cy.getBySel("header").contains('Home');
        cy.getBySel("header").contains('My Pets');
        cy.getBySel("header").contains('Profile');
    });

    it('should navigate to all pages correctly', () => {
        cy.visit("/");

        // Navigate to My Pets
        cy.getBySel("header").contains('My Pets').click();
        cy.location("pathname").should("eq", "/pets");

        // Navigate to Profile
        cy.getBySel("header").contains('Profile').click();
        cy.location("pathname").should("eq", "/profile");

        // Navigate back to Home
        cy.getBySel("header").contains('Home').click();
        cy.location("pathname").should("be.oneOf", ["/", "/home"]);
    });
});

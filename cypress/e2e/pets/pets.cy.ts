describe('Header Navigation', () => {
    it('should display texts correctly', () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");

        cy.getBySel("header").contains('VetCare');
        cy.getBySel("header").contains('Home');
        cy.getBySel("header").contains('My Pets');
        cy.getBySel("header").contains('Profile');
    });
});

describe('Pet Profile', () => {
    beforeEach(() => {
        cy.visit('/pets');
        // Click on Tessa's card to go to her profile
        cy.contains('h1, h2, h3', 'Tessa').should('be.visible').click();
    });

    it('should display the pet profile correctly', () => {
        cy.location('pathname').should('include', '/pets/1');
        cy.getBySel('pet-name').should('contain', 'Tessa');
        cy.contains('Chihuahua').should('be.visible');
    });

    it('should switch between tabs and show correct content', () => {
        // Switch to Vaccines tab
        cy.getBySel('tab-vacunas').click();
        cy.contains('Historial de vacunas').should('be.visible');
        cy.contains('Rabia').should('be.visible');
        cy.contains('Parvovirus').should('be.visible');

        // Switch to Appointments tab
        cy.getBySel('tab-consultas').click();
        cy.contains('Historial de citas').should('be.visible');
        cy.contains('Chequeo general').should('be.visible');
        cy.contains('Dra. González').should('be.visible');

        // Switch back to Summary tab
        cy.getBySel('tab-resumen').click();
        cy.contains('Alergias').should('be.visible');
        cy.contains('Polen').should('be.visible');
    });
});

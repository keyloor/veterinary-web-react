describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the welcome message', () => {
        cy.getBySel('welcome-title').should('be.visible');
        cy.getBySel('welcome-title').should('contain', 'VetCare');
    });

    it('should display the pet statistics and next appointment', () => {
        cy.getBySel('pet-count').should('be.visible');
        cy.getBySel('next-appointment').should('be.visible');
    });

    it('should navigate to the pets page using the quick access link', () => {
        cy.getBySel('link-pets').click();
        cy.url().should('include', '/pets');
        cy.contains('My Pets').should('be.visible');
    });

    it('should navigate to the profile page using the quick access link', () => {
        cy.getBySel('link-profile').click();
        cy.url().should('include', '/profile');
        cy.contains('Profile').should('be.visible');
    });
});

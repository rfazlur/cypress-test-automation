describe('computer database website navigation', () => {

    beforeEach(() => {
        cy.visit("computers");
    });

    it('should be able to navigate to various pages', () => {
        cy.get('header a').should('contain', 'Play sample application — Computer database');
        cy.get('a#add').should('be.visible');
        cy.get('a#add').click();
        cy.get('.btn.primary').should('be.visible');
        cy.get('section form div a').should('be.visible');
        cy.get('section form div a').click();
        cy.get('header a').should('contain', 'Play sample application — Computer database');
    });

});
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

    it('should be able to add new computer', () => {
        cy.get('header a').should('contain', 'Play sample application — Computer database');
        cy.get('#add').should('be.visible');
        cy.get('#add').click();
        cy.get('.btn.primary').should('be.visible');
        cy.get('#name').type('New Computer 2');
        cy.get('#introduced').type('2001-12-12');
        cy.get('#discontinued').type('2018-12-12');
        cy.get('#company').select('RCA');
        cy.get('.btn.primary').click();
        cy.get('.alert-message.warning').should('contain', 'Done! Computer New Computer 2 has been created');
    });

});
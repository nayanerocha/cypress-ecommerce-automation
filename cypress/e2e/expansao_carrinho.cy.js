/// <reference types="cypress" />

describe('Compra de múltiplos produtos', () => {

    const produto01 = 'Selene Yoga Hoodie'
    const produto02 = 'Ingrid Running Jacket'

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve adicionar múltiplos produtos ao carrinho mantendo a persistência', () => {

        cy.get(':nth-child(6) > .page-numbers').click()
        cy.get('.product-block').contains(produto01).click()

        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
    

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/5/')
        cy.get('.product-block').contains(produto02).click()

        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-White').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', produto02)

        cy.get('#cart > .dropdown-toggle').click()

        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content').should('contain', produto01)
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content').should('contain', produto02)
});
});
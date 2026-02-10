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

    it('Deve adicionar um produto da página 9 ao carrinho', () => {
        cy.get(':nth-child(6) > .page-numbers').click()
        cy.get('.product-block').contains(produto01).click()

        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
    });

    it('Deve adicionar um produto da página 5 ao carrinho', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/5/')
        cy.get('.product-block').contains(produto02).click()

        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-White').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
});
});
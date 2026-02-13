/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');


describe('Funcionalidade Cadastro', () => {

    const produto01 = 'Ariel Roll Sleeve Sweatshirt'
    const produto03 = 'Aero Daily Fitness Tee'

    beforeEach(() => {
        cy.visit('produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains(produto01)
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 6
        cy.get('[class="product-block grid"]')
            .contains(produto01).click()
        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', `“${produto01}” foram adicionados no seu carrinho.`)
    });
});
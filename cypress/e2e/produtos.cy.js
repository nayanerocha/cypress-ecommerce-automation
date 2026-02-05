/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(6)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });
});
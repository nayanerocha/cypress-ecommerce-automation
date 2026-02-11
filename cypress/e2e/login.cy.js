/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')
context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });
  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('.login [name="username"]').type('aluno_ebac@teste.com')
    cy.get('.login [name="password"]').type('teste@teste.com')
    cy.get('.login .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('.login [name="username"]').type(perfil.usuario)
    cy.get('.login [name="password"]').type(perfil.senha, { log: false })
    cy.get('.login .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')

  });

  it('Deve fazer login com sucesso - Usando fixture', () => {

    cy.fixture('perfil').then(dados => {
      cy.get('.login [name="username"]').type(dados.usuario)
     cy.get('.login [name="password"]').type(dados.senha, { log: false })
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
    })

  });

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

  });
});

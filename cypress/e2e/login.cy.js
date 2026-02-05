/// <reference types="cypress" />

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
})
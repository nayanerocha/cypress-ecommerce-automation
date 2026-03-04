/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require("../fixtures/endereco.json");

describe("Funcionalidade Endereços - Faturamento e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer cadastro de faturamento com sucesso", () => {
    enderecoPage.editarEnderecoFaturamento(
      "Ana",
      "Pinheiro",
      "EBAC",
      "Brasil",
      "Rua das Flores",
      "215",
      "Curitiba",
      "Paraná",
      "17240-009",
      "41882547196",
      "anateste@email.com",
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso.",
    );
  });

  it("Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados", () => {
    enderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email,
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso.",
    );
  });

  it.only("Deve fazer cadastro do endereço de entrega com sucesso - Usando arquivo de dados", () => {
    enderecoPage.editarEnderecoEntrega(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep,
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso.",
    );
  });
});

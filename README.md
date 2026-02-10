# cypress-ecommerce-automation

Automação de testes de ponta a ponta (E2E) em plataforma de e-commerce utilizando Cypress e Faker.js.
Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software da **EBAC**.

Este projeto foca na validação de fluxos críticos de negócio, garantindo que funcionalidades essenciais como autenticação, cadastro e o processo de compra operem conforme os requisitos, minimizando riscos de regressão e falhas na experiência do usuário.

## 🛠️ Tecnologias Utilizadas

* **Cypress**: Framework principal para automação de testes E2E.
* **JavaScript**: Linguagem base para o desenvolvimento dos scripts.
* **Faker.js**: Biblioteca utilizada para geração de dados dinâmicos e aleatórios.
* **Node.js**: Ambiente de execução e gerenciamento de dependências.

---

## 🧪 Plano de Testes e Execução

Abaixo estão os cenários de teste mapeados e o status atual da automação:

| ID | Cenário | Status | Técnica Utilizada |
|:---|:---|:---:|:---|
| CT01 | Realizar login com credenciais válidas | ✅ Passou | Seletores de CSS e Assertions |
| CT02 | Realizar pré-cadastro com dados aleatórios | ✅ Passou | Massa de dados dinâmica (Faker.js) |
| CT03 | Adicionar produto ao carrinho | ✅ Passou | Seletores de Classe e Validação de Quantidade |

---

### 🔑 Detalhes da Execução: CT01 - Login com Sucesso

**Objetivo:** Garantir que um usuário previamente cadastrado consiga acessar sua conta e ser redirecionado para o painel de controle ("Minha conta").

<details>
  <summary>📸 Clique aqui para ver as evidências de Login</summary>

  #### 1. Logs de execução (Cypress Runner)
  Este print demonstra o passo a passo dos comandos executados pelo robô e a asserção (assertion) de sucesso confirmando o login.
  ![Login Runner](cypress/img/login_runner_1.png)

  #### 2. Interface da página logada
  Visualização da página de destino após a autenticação bem-sucedida, capturada automaticamente via screenshot.
  ![Login Sucesso](cypress/img/login_sucesso.png)
</details>


---

### 👤 Detalhes da Execução: CT02 - Pré-cadastro e Perfil

**Objetivo:** Validar a criação de uma nova conta utilizando dados dinâmicos e a complementação do perfil do usuário na área logada.

<details>
  <summary>📸 Clique aqui para ver as evidências de Cadastro</summary>

  #### 1. Fluxo de Cadastro e Edição (Cypress Runner)
  Este print demonstra o uso do **Faker.js** para gerar e-mails e nomes aleatórios, permitindo que o teste seja executado infinitas vezes sem repetição de dados.
  ![Cadastro Runner](cypress/img/cadastro_1.png)
  ![Cadastro Runner](cypress/img/cadastro_2.png)

  #### 2. Confirmação de Alteração
  Visualização da mensagem de sucesso: *"Detalhes da conta modificados com sucesso"*, validando o fim do fluxo.
  ![Cadastro Sucesso](cypress/img/cadastro_sucesso.png)
</details>
---
---

### 🛒 Detalhes da Execução: CT03 - Adição ao Carrinho

**Objetivo:** Validar o fluxo de seleção de produtos com variações (tamanho e cor), ajuste de quantidade e inserção no carrinho de compras.

🔍 Nota técnica: Devido à ausência de IDs únicos nos seletores de variações, este cenário foi automatizado utilizando classes específicas e seletores de atributo para garantir a precisão do clique.

<details>
  <summary>📸 Clique aqui para ver as evidências de Compra</summary>

  #### 1. Seleção de Variações e Quantidade
  Execução da lógica de seleção por classes específicas e ajuste dinâmico da quantidade antes da inserção no carrinho.
  ![Carrinho Runner](cypress/img/carrinho_1.png)
  ![Carrinho Runner](cypress/img/pagina_produto.png)

  #### 2. Carrinho Atualizado
  Validação da mensagem de sucesso e confirmação de que os itens foram corretamente contabilizados no sistema do e-commerce.

  ![Carrinho Sucesso](cypress/img/adicionado_carrinho_sucesso.png)
  ![Carrinho Sucesso](cypress/img/carrinho_2.png)
  ![Carrinho Sucesso](cypress/img/carrinho_2_1.png)

  ---

### 🛒 Detalhes da Execução: CT04 - Expansão de Navegação e Múltiplos Itens

**Objetivo:** Validar a persistência do carrinho ao navegar entre páginas distintas do catálogo (Página 9 e Página 5) e a adição de múltiplos produtos com variações de tamanho e cor.

🔍 **Nota técnica:** Para otimizar a estabilidade do teste e contornar elementos de interface que sobrepunham a paginação, utilizei a estratégia de **navegação direta via URL** (`cy.visit()`). Além disso, apliquei **Lógica de Programação** através do uso de variáveis para armazenar os nomes dos produtos, tornando o código mais limpo, legível e de fácil manutenção.

<details>
  <summary>📸 Clique aqui para ver as evidências da Expansão</summary>

  #### 1. Adição do Primeiro Produto (Página 9)
  Navegação direta para a página 9 e seleção do produto "Selene Yoga Hoodie" com suas respectivas variações.
  ![Produto Página 9](cypress/img/ct04-1.png)
![Produto Página 9](cypress/img/ct04-2_p9.png)
![Produto Página 9](cypress/img/ct04-3.png)

  #### 2. Adição do Segundo Produto (Página 5)
  Transição para a página 5 sem perda de sessão, adicionando o produto "Ingrid Running Jacket" ao carrinho já existente.
  ![Produto Página 5](cypress/img/ct04-3.png)
  ![Produto Página 9](cypress/img/ct04-4.png)
  ![Produto Página 9](cypress/img/ct04-5.png)
  ![Produto Página 9](cypress/img/ct04-sucesso-pagina-5.png)

</details>

---

  ---

## 📋 Estratégia de Testes

Para garantir a qualidade da expansão do e-commerce, utilizei uma abordagem híbrida que combina o planejamento manual com a eficiência da automação.

### 1. Testes Manuais (Cenários de Negócio)
Antes de automatizar, realizei o levantamento de cenários críticos para validar as regras de negócio e a experiência do usuário (UX).
* **CT-001:** Validação de persistência de múltiplos itens no carrinho.
* **CT-002:** Bloqueio de compra sem seleção de atributos (Cor/Tamanho).
* **CT-003:** Feedback visual em buscas por termos inexistentes.

👉 **[Acesse aqui o Plano de Testes detalhado](./docs/Plano_de_Testes.md)**

### 2. Automação de Testes (Cypress)
Os cenários de fluxo de ponta a ponta (E2E) foram automatizados para garantir a confiabilidade do sistema e evitar regressões.
* **Destaques Técnicos:** * Navegação otimizada entre múltiplas páginas com `cy.visit()`.
    * Uso de **Variáveis (Lógica de Programação)** para facilitar a manutenção dos nomes de produtos.
    * Validação de integridade de dados no carrinho de compras.

---

</details>

## 🚀 Como executar o projeto
Para rodar estes testes na sua máquina, siga os passos abaixo:
1. Pré-requisitos

É necessário ter o Node.js instalado. Você pode baixá-lo em nodejs.org.
2. Instalação

Clone este repositório e, dentro da pasta do projeto, execute o comando abaixo para instalar o Cypress e o Faker.js:
Bash

npm install

3. Execução dos Testes

Existem duas formas de rodar os testes:

A. Interface Visual (Modo Iterativo): Para abrir o painel do Cypress e escolher qual teste rodar visualmente:
Bash

npx cypress open

B. Modo Headless (Terminal): Para rodar todos os testes de uma vez direto no terminal (ideal para CI/CD):
Bash

npx cypress run

## Autora: Nayane Rocha🐱💕👩‍💻
[GitHub](https://github.com/nayanerocha)
[Linkedin](https://www.linkedin.com/in/nayanerocha/)

### Licença: 📄

Este projeto é de código aberto e foi criado para fins educacionais.
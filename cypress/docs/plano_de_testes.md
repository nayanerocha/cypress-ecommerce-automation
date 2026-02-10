# 📋 Plano de Testes Manuais - E-commerce EBAC

Este documento descreve os cenários de teste manuais planejados para validar as funcionalidades críticas do fluxo de compra e usabilidade.

---

### CT-001: Adicionar múltiplos produtos de diferentes páginas
**Objetivo:** Validar se o carrinho mantém a persistência dos dados ao navegar por diferentes categorias e páginas.
- **Prioridade:** Alta
- **Pré-condições:** O carrinho deve estar vazio.
- **Passos:**
    1. Acessar a listagem de produtos e navegar até a página 9.
    2. Selecionar o produto "Selene Yoga Hoodie".
    3. Escolher uma cor, tamanho e quantidade válidos.
    4. Clicar em "Comprar".
    5. Retornar à listagem e navegar até a página 5.
    6. Selecionar o produto "Ingrid Running Jacket".
    7. Escolher cor, tamanho e quantidade e clicar em "Comprar".
    8. Acessar a página do carrinho.
- **Resultado Esperado:** Ambos os produtos devem estar listados com as variações corretas e o subtotal deve refletir a soma dos dois itens.

![Resultado](cypress/img/ct001-manual.png)


---

### CT-002: Impedir compra sem seleção de atributos (Cor/Tamanho)
**Objetivo:** Garantir que o usuário não adicione produtos incompletos ao carrinho.
- **Prioridade:** Média
- **Passos:**
    1. Acessar a página de qualquer produto com variações.
    2. Clicar diretamente no botão "Comprar" sem selecionar cor ou tamanho.
- **Resultado Esperado:** O sistema deve exibir uma mensagem de alerta (ex: "Selecione as opções do produto") e o item não deve ser adicionado ao carrinho.

![Resultado](cypress/img/ct002-manual-1.png)
![Resultado](cypress/img/ct002-manual-2.png)



---

### CT-003: Validação de busca por termo inexistente
**Objetivo:** Validar a experiência do usuário (UX) em cenários de erro de busca.
- **Prioridade:** Baixa
- **Passos:**
    1. Clicar no ícone de busca/lupa.
    2. Digitar um termo aleatório que não corresponda a produtos (ex: "xyz123").
    3. Pressionar Enter.
- **Resultado Esperado:** O sistema deve exibir uma mensagem amigável informando que nenhum produto foi encontrado, em vez de uma página de erro ou tela em branco.

![Resultado](cypress/img/ct003-manual-1.png)
![Resultado](cypress/img/ct003-manual-2.png)


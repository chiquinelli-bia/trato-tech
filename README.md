# Trato Tech

![Thumbnail do projeto. O título é “Trato Tech — Gerenciamento de Estado com Redux Toolkit” e o subtítulo é "adaptado por Bianca Chiquinelli".](thumb.png)

Aplicação de e-commerce desenvolvida em **React** com gerenciamento de estado global utilizando **Redux Toolkit**. O projeto permite navegar por categorias, pesquisar produtos, favoritar itens e gerenciar um carrinho de compras compartilhado entre diferentes páginas.

O principal objetivo foi aprofundar o entendimento sobre **imutabilidade de estado** utilizando **Immer**, explorando a criação e evolução de reducers em cenários reais.

## Tecnologias

- React
- Redux Toolkit
- Immer
- React Hook Form
- React Router DOM
- Sass
- Vite

---

## Funcionalidades

- Navegação entre páginas com React Router.
- Listagem e busca dinâmica de produtos.
- Sistema de favoritos compartilhado.
- Carrinho de compras com atualização automática do subtotal.
- Cadastro de novos produtos.
- Estrutura inicial para edição e exclusão de produtos.

---

## 💡 Destaques técnicos

### Gerenciamento de estado com Redux Toolkit e Immer

A aplicação utiliza **Redux Toolkit** para centralizar o estado global e **Immer** para simplificar atualizações imutáveis, mantendo reducers mais legíveis e previsíveis.

**Implementações:**

- Estado global compartilhado entre carrinho, busca, categorias e itens.
- Reducers especializados para cada domínio da aplicação.
- Implementação de operações de cadastro, atualização, exclusão e reset de estado.
- Atualizações imutáveis utilizando as abstrações fornecidas pelo Immer.

### Formulários com React Hook Form

Foi desenvolvida uma página de cadastro de produtos utilizando **React Hook Form**, integrando validação e gerenciamento de formulário ao fluxo da aplicação.

**Implementações:**

- Controle completo dos campos com React Hook Form.
- Validação de entradas, incluindo seleção obrigatória de categorias.
- Integração do formulário com o estado global por meio de actions do Redux.

### Evolução da arquitetura

Durante o desenvolvimento, a estrutura da aplicação foi refatorada para reduzir acoplamento e facilitar manutenção.

**Melhorias implementadas:**

- Refatoração de componentes para consumo do estado via `useSelector`.
- Criação de componentes reutilizáveis para formulários e interface.
- Organização da lógica de negócio em reducers independentes.
- Separação entre interface, gerenciamento de estado e regras de negócio.

---

## Aprendizados

Este projeto foi utilizado para explorar conceitos importantes de gerenciamento de estado em aplicações React, com foco em:

- Imutabilidade utilizando Immer.
- Escrita de reducers previsíveis e organizados.
- Integração entre Redux Toolkit e React Hook Form.
- Compartilhamento de estado entre diferentes páginas da aplicação.

---

## Acesso ao projeto

**Deploy:** <https://trato-tech-pink.vercel.app/>

### Executar localmente

```bash
git clone <https://github.com/chiquinelli-bia/trato-tech>

cd trato-tech

npm install

npm run dev
```

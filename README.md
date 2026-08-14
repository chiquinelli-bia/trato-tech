# Trato Tech

![Thumbnail do projeto. O título é “Trato Tech — Gerenciamento de Estado com Redux Toolkit” e o subtítulo é "adaptado por Bianca Chiquinelli".](thumb.png)

Aplicação de e-commerce desenvolvida em React, com gerenciamento de estado global utilizando Redux Toolkit. O projeto permite navegar por categorias, pesquisar produtos, favoritar itens e gerenciar um carrinho de compras compartilhado entre diferentes páginas.

O projeto evoluiu a partir do estudo de Redux Toolkit, Redux Thunk e Listener Middleware, com foco na organização do fluxo de dados assíncronos e na redução de requisições desnecessárias à API.

## Tecnologias

- React
- Redux Toolkit
- Redux Listener Middleware
- Redux Thunk
- Immer
- React Hook Form
- React Router DOM
- Axios
- Sass
- Vite

## Funcionalidades

- Navegação entre páginas com React Router.
- Listagem e busca dinâmica de produtos.
- Sistema de favoritos compartilhado.
- Cadastro, edição e exclusão de produtos.
- Filtragem por categorias.
- Carrinho de compras compartilhado entre páginas.
- Carregamento assíncrono de categorias e produtos.
- Feedback visual para operações da aplicação através de Toasts.

## 💡 Destaques técnicos

### Gerenciamento de estado com Redux Toolkit e Immer

A aplicação utiliza **Redux Toolkit** para centralizar o estado global e **Immer** para simplificar atualizações imutáveis, mantendo reducers mais legíveis e previsíveis.

**Implementações:**

- Estado global compartilhado entre carrinho, busca, categorias e itens.
- Reducers especializados para cada domínio da aplicação.
- Implementação de operações de cadastro, atualização, exclusão e reset de estado.
- Atualizações imutáveis utilizando as abstrações fornecidas pelo Immer.

### Listener Middleware e controle de requisições

O **Redux Listener Middleware** foi utilizado para coordenar efeitos a partir das ações disparadas pela aplicação, permitindo controlar quando determinadas requisições devem acontecer.

- Inscrição e desinscrição dinâmica de listeners.
- Acesso ao estado atual durante a execução dos efeitos.
- Disparo controlado de novas actions a partir de eventos do Redux.
- Carregamento apenas dos dados necessários para cada página.
- Prevenção de buscas duplicadas e requisições desnecessárias à API.

Essa abordagem reduz o acoplamento entre páginas e lógica de carregamento, tornando o fluxo de dados mais previsível e eficiente.

### Fluxo assíncrono com Redux Thunk

- Implementação de **middlewares** para carregamento assíncrono de categorias e produtos.
- Separação entre lógica de busca de dados e componentes de interface.
- Tratamento completo dos estados **pending**, **fulfilled** e **rejected** utilizando `extraReducers`.
- Feedback ao usuário durante operações assíncronas através de Toasts.

### Evolução da arquitetura

Durante o desenvolvimento, a estrutura da aplicação foi refatorada para reduzir acoplamento e facilitar manutenção.

**Melhorias implementadas:**

- Refatoração de componentes para consumo do estado via `useSelector`.
- Criação de componentes reutilizáveis para formulários e interface.

* Organização da lógica de negócio fora da interface, facilitando manutenção e evolução da aplicação.
* Estrutura preparada para expansão de funcionalidades sem aumentar a complexidade dos componentes.

### Formulários com React Hook Form

Foi desenvolvida uma página de cadastro de produtos utilizando **React Hook Form**, integrando validação e gerenciamento de formulário ao fluxo da aplicação.

**Implementações:**

- Controle completo dos campos com React Hook Form.
- Validação de entradas, incluindo seleção obrigatória de categorias.
- Integração do formulário com o estado global por meio de actions do Redux.

## Acesso ao projeto

**Deploy:** <https://trato-tech-pink.vercel.app/>

### Executar localmente

```bash
git clone <https://github.com/chiquinelli-bia/trato-tech>

cd trato-tech

npm install

npm run dev
```

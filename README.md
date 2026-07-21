# Trato Tech

![Thumbnail do projeto. O título é “Trato Tech — Gerenciamento de Estado com Redux Toolkit” e o subtítulo é "adaptado por Bianca Chiquinelli".](thumb.png)

Aplicação de e-commerce desenvolvida em `React`, utilizando `Redux Toolkit` para gerenciamento de estado global. O projeto permite navegar por categorias, pesquisar produtos, favoritar itens e gerenciar um carrinho de compras com estado compartilhado entre diferentes páginas.

## Tecnologias

- React
- Redux Toolkit
- React Router DOM
- Sass
- Classnames
- UUID
- Vite

## Funcionalidades

- Navegação entre páginas com `React Router`.
- Listagem de produtos por categoria.
- Busca dinâmica de produtos.
- Carrinho de compras com atualização de quantidade e cálculo automático do subtotal.
- Sistema de favoritos compartilhado entre diferentes páginas.

---

## 💡 Destaques técnicos

### Arquitetura de gerenciamento de estado com Redux Toolkit

A aplicação foi estruturada utilizando `Redux Toolkit` para centralizar o gerenciamento de estado, separando as responsabilidades da aplicação em reducers independentes para categorias, itens, carrinho e busca.

_Recursos implementados:_

- Estado global compartilhado entre diferentes páginas da aplicação, garantindo consistência das informações sem necessidade de prop drilling.
- Organização da lógica da aplicação em reducers especializados para categorias, itens, carrinho e busca.
- Centralização do gerenciamento de estado utilizando `Redux Toolkit`, facilitando a manutenção e a evolução da aplicação.
- Atualização previsível do estado por meio de reducers especializados, mantendo o fluxo de dados desacoplado dos componentes.

### Sistema de busca global

A funcionalidade de busca foi desenvolvida para ser reutilizada em diferentes páginas da aplicação, mantendo um único estado global para o termo pesquisado.

_Recursos implementados:_

- Reducer dedicado ao gerenciamento da busca.
- Reutilização do mesmo componente de pesquisa nas páginas de categorias e carrinho.
- Filtragem dinâmica utilizando expressões regulares `RegExp`.

### Estrutura da aplicação

A estrutura da aplicação foi reorganizada para reduzir duplicação de código e facilitar futuras evoluções.

_Melhorias implementadas:_

- Componentização da interface visando reutilização.
- Separação entre páginas, componentes e gerenciamento de estado.
- Refatoração dos componentes para integração com Redux.
- Centralização da navegação utilizando React Router.
- Organização do código para facilitar manutenção e escalabilidade.

## Acesso ao projeto

**Deploy:** <https://trato-tech-pink.vercel.app/>

### Executar localmente

```bash
git clone <https://github.com/chiquinelli-bia/trato-tech>

cd trato-tech

npm install

npm run dev
```

# 🛒 Order App

Aplicação de pedidos desenvolvida com **Angular (Standalone API)**
utilizando arquitetura moderna baseada em **Core / Shared / Features** e
gerenciamento de estado com **Signals**.

------------------------------------------------------------------------

## 🚀 Tecnologias

-   Angular 21+
-   Standalone Components
-   Angular Signals
-   TypeScript
-   SCSS
-   CSS Grid
-   Git & GitHub

------------------------------------------------------------------------

## 📂 Arquitetura

O projeto segue uma estrutura escalável organizada por domínio:

    src/app/
      core/        → Serviços globais e estado da aplicação
      shared/      → Componentes reutilizáveis (UI + Layout)
      features/    → Funcionalidades de domínio (Products)

### Core

-   `CartService` com Signals
-   Estado global reativo
-   Computed properties para total de itens e valor total

### Shared

-   Button\
-   Card\
-   Container\
-   Header

### Features

-   Products
    -   Model tipado (`Product`)\
    -   Lista mockada\
    -   Integração com CartService

------------------------------------------------------------------------

## 🛒 Funcionalidades

-   📦 Listagem de produtos
-   ➕ Adição de itens ao carrinho
-   🔢 Contador global reativo no header
-   💰 Cálculo automático de total com `computed()`
-   🎨 Componentes reutilizáveis (Design System básico)

------------------------------------------------------------------------

## 🧠 Conceitos Aplicados

-   Standalone API (sem NgModules)
-   Injeção de dependência moderna
-   Signals para gerenciamento de estado
-   Computed properties
-   Content projection (`ng-content`)
-   Separação de responsabilidades
-   Estrutura escalável por domínio

------------------------------------------------------------------------

## ⚙️ Development Server

Clone o repositório:

``` bash
git clone https://github.com/marcosaugustomodesto/order-app.git
```

Entre na pasta do projeto:

``` bash
cd order-app
```

Instale as dependências:

``` bash
npm install
```

Execute o servidor de desenvolvimento:

``` bash
ng serve
```

Acesse no navegador:

http://localhost:4200

------------------------------------------------------------------------

## 🧪 Running Tests

Execute os testes unitários com:

``` bash
ng test
```

------------------------------------------------------------------------

## 📈 Próximas Evoluções

-   Drawer de carrinho
-   Remoção de produtos
-   Persistência com localStorage
-   Lazy Loading
-   Página de checkout
-   Integração com API
-   Deploy público

------------------------------------------------------------------------

## 👨‍💻 Autor

**Marcos Augusto Modesto**\
GitHub: https://github.com/marcosaugustomodesto

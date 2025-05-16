<<<<<<< HEAD
📦 Inventory Management System
Inventory Management é uma aplicação web voltada para o controle e organização de estoque, desenvolvida com React e TypeScript no front-end. O objetivo do projeto é oferecer uma interface moderna, responsiva e funcional para empresas ou usuários que precisam gerenciar produtos, quantidades, categorias e movimentações de estoque com facilidade e segurança.

⚙️ O back-end ainda está em fase de escolha. Tecnologias como Node.js com Express, NestJS, Django, Spring Boot ou outras estão sendo consideradas com base na escalabilidade, segurança e integração com banco de dados.

🎯 Funcionalidades previstas:
Cadastro e edição de produtos

Controle de entrada e saída de estoque

Visualização de relatórios e movimentações

Filtros por categoria, data e status

Dashboard com métricas em tempo real (em desenvolvimento)

Autenticação e autorização de usuários (em planejamento)

🛠 Tecnologias utilizadas (Front-end):
React

TypeScript

React Router

Styled-components ou Tailwind CSS (dependendo da escolha de estilização)

Axios (para futuras integrações com API)

React Hook Form / Yup (validação de formulários)

📌 Status do Projeto:
🚧 Em desenvolvimento – o front-end está em fase inicial. A definição do back-end será feita em breve.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 171071b (Initial adjustments and creation of Sidenav)

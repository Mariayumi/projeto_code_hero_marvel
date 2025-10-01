# Projeto Code Hero Marvel

Este projeto é a resolução do teste técnico para a vaga de Front-End React. É uma aplicação desenvolvida com React e TypeScript, focada em consumir e apresentar dados da API pública da Marvel, demonstrando proficiência em desenvolvimento de interfaces ricas e no consumo de APIs externas.

## 🔑 Principais Tecnologias e Implementações

- Front-End: React
- Linguagem: TypeScript
- Consumo da API Marvel: Utilização da biblioteca MD5 para a geração das hashes de autenticação e requisições seguras à API.
- Gerenciamento de Rotas: Implementação de navegação entre diferentes visualizações da aplicação.

## 💡 Funcionalidades Desenvolvidas

A aplicação oferece uma experiência de navegação completa dentro do universo Marvel, utilizando as seguintes rotas da API:

- Listagem de Personagens (/characters): Exibe uma lista de heróis e vilões, permitindo a navegação e busca.
- Detalhe do Personagem (/characters/{id}): Visualização completa, mostrando informações específicas de um herói selecionado.
- Listagem de Quadrinhos por Personagem (/comics): Apresenta a coleção de HQs associadas ao personagem visualizado, integrando as informações de forma dinâmica.

## 📂 Estrutura de Pastas (Arquitetura)
```
.
├── App.tsx
├── assets
├── components
│   ├── ComicLista
│   ├── Input
│   ├── Modal
│   ├── Navbar
│   ├── Paginacao
│   └── Tabela
├── context
│   ├── ThemeContext.ts
│   └── ThemeProvider.tsx
├── index.css
├── layout
├── main.tsx
├── pages
│   ├── descricao
│   └── home
├── routes
│   ├── api.ts
│   ├── comics.ts
│   └── personagens.ts
├── services
│   └── auth.ts
├── types
└── utils
```

# 🚀 Como Rodar o Projeto Localmente

Para iniciar a aplicação em seu ambiente, siga os passos simples abaixo. Certifique-se de ter o Node.js e o npm/yarn instalados.

- Instalação das Dependências:

```
npm install
# ou
# yarn install
```

- Inicialização da Aplicação:

```
npm start
# ou
# yarn start
```



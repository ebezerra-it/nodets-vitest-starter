
# Nodejs/ Typescript starter

A clean Nodejs/Typescript project using Eslint with some plugins.





## Eslint plugins
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-sort-destructure-keys](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys)
## Prerequisites

- Node v20.9.0
- Yarn 1.22.21

## Instalation

1. Use git to project checkout:
```bash
  mkdir new-project && cd $_
  git clone https://github.com/ebezerra-it/nodets-starter .
```
2. Rename project name
```bash
npm pkg set your-project-name
```
3. Install packages:
```bash
  yarn install
```
4. Change your remote repository:
```bash
  git remote set-url origin new.git.url/here
  git add .
  git commit "First commit"
```
    
## Manual Install
1. Init project and install dev packages:
```bash
yarn init -y

yarn add -D typescript ts-node nodemon eslint husky rimraf /
@stylistic/eslint-plugin @typescript-eslint/eslint-plugin /
@typescript-eslint/parser eslint-plugin-import /
eslint-plugin-n eslint-plugin-promise /
eslint-plugin-sort-destructure-keys @types/node
```

2. Create tsconfig.json file:
```bash
npx tsc --init
```

3. Adjust tsconfig.json rootDir and outDir:
```json
{
    // ...
    "rootDir": "src",
    "baseUrl": "./",
    "outDir": "build",
    "inlineSourceMap": true,
    "resolveJsonModule": true,
    "allowJs": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    // ...
},
"exclude": ["node_modules"]
```

4. Create .eslintrc.js file with the following content:
```javascript
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:all',
    'plugin:@stylistic/ts/all-extends',
    "plugin:promise/recommended",
    "plugin:n/recommended",
    "plugin:import/recommended"
  ],
  plugins: [
    '@stylistic/js',
    'sort-destructure-keys'
  ],
  rules: {
    'one-var': ['error', 'never'],
    'no-ternary': 'off',
    'no-console': 'warn',
    'no-magic-numbers': 'warn',
    'max-len': ['warn', { code: 120 }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'prefer-destructuring': ['error'],
    'prefer-template': 'error',
    'space-in-parens': 'error',
    'no-use-before-define': 'error',
    'object-shorthand': 'warn',
    'newline-after-var': ['error', 'always'],
    'curly': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/ts/quote-props': ['error', 'as-needed'],
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/js/padded-blocks': ['error', 'never'],
    '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    'sort-destructure-keys/sort-destructure-keys': [2, { "caseSensitive": true }]
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: [],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
          },
          { "selector": "variableLike", "format": ["camelCase", "UPPER_CASE"] },
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]",
              "match": true
            }
          }
        ],
        "@typescript-eslint/typedef": [
          "error",
          {
            "arrowParameter": true,
            "variableDeclaration": true,
            "arrayDestructuring": true,
            "memberVariableDeclaration": true,
            "objectDestructuring": true,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclarationIgnoreFunction": false,
          }
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-inferrable-types": ["error", { "ignoreParameters": true, "ignoreProperties": true }],
        "@typescript-eslint/explicit-function-return-type": "error",
        '@typescript-eslint/explicit-module-boundary-types': "error",
      },
    }
  ],
};
```

5. Create .eslintignore file inside project root folder to tell eslint to ignore .eslintrc.js file:
```env
.eslintrc.js
```

6. Create settings.json file inside .vscode folder:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.codeActionsOnSave.mode": "problems",
  "scss.lint.unknownAtRules": "ignore",
  "eslint.format.enable": true,
  "prettier.useEditorConfig": false,
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.validate.enable": true
}
```

7. Insert scripts commands in package.json file:
```json
{
  "scripts": {
    "dev": "nodemon --watch \"*.ts\" --exec \"ts-node\" ./src/index.ts"
  },
}
```
8. Create Dockerfile and Docker-compose.yml files
### Dockerfile
```Dockerfile
ARG NODE_VERSION=20-alpine
FROM node:${NODE_VERSION}
WORKDIR /usr/app
```
### Docker-compose.yml
```yml
version: '3.8'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile

    #container_name: app
    volumes:
      - .:/usr/app

    command: yarn dev-shell
    #ports:
    #  - '8001:8001'
```
9. Create .gitignore file
```text
node_modules/
build/
.husky/
```
10. Update README.md file

11. Git setup and first commit
```bash
git init
git remote set-url origin new.git.url/here
git add .
git commit "First commit"
```
## Author

- [@ebezerra-it](https://www.github.com/ebezerra-it)


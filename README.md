
# Nodejs/ Typescript with Vitest project starter

A clean Nodejs/Typescript project using Eslint with some plugins and Vitest.


## Prerequisites

- Node v20.9.0
- Yarn 1.22.21

## Instalation

1. Use git to project checkout:
```bash
  mkdir new-project && cd $_
  git clone https://github.com/ebezerra-it/nodets-vitest-starter.git .
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

## Usage
For running tests
```bash
yarn test
```
For running TDD mode (watchAll=true)
```bash
yarn tdd
```
For running project in development mode
```bash
yarn dev
```
## Author

- [@ebezerra-it](https://www.github.com/ebezerra-it)


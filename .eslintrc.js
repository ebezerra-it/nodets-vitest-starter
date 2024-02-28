module.exports = {
  env: {
    es2022: true,
    node: true
  },
  extends: [
    "eslint:all",
    "plugin:@stylistic/ts/all-extends",
    "plugin:promise/recommended",
    "plugin:n/recommended",
    "plugin:import/recommended"
  ],
  plugins: [
    "@stylistic/js",
    "sort-destructure-keys"
  ],
  rules: {
    "one-var": ["error", "never"],
    "no-ternary": "off",
    "no-console": "warn",
    "no-magic-numbers": "warn",
    "max-len": ["warn", { code: 80 }],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "prefer-destructuring": ["error"],
    "prefer-template": "error",
    "space-in-parens": "error",
    "no-use-before-define": "error",
    "object-shorthand": "warn",
    "newline-after-var": ["error", "always"],
    "curly": ["error", "multi-line"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "@stylistic/ts/quote-props": ["error", "as-needed"],
    "@stylistic/ts/indent": ["error", 2],
    "@stylistic/js/padded-blocks": ["error", "never"],
    "@stylistic/ts/object-curly-spacing": ["error", "always"],
    "sort-destructure-keys/sort-destructure-keys": [2, { caseSensitive: true }]
  },

  // Typescript files
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/strict-type-checked"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"],
        tsconfigRootDir: __dirname
      },
      plugins: [],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            ignoreRestSiblings: true
          }
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "should", "has", "can", "did", "will"]
          },
          { selector: "variableLike", format: ["camelCase", "UPPER_CASE"] },
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true
            }
          }
        ],
        "@typescript-eslint/typedef": [
          "error",
          {
            arrowParameter: true,
            variableDeclaration: true,
            arrayDestructuring: true,
            memberVariableDeclaration: true,
            objectDestructuring: true,
            parameter: true,
            propertyDeclaration: true,
            variableDeclarationIgnoreFunction: false
          }
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true, ignoreProperties: true }],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error"
      }
    }
  ],

  // JEST files

};

// @ts-check
import { fixupPluginRules } from "@eslint/compat";
import js from "@eslint/js";
import graphqlEslint from "@graphql-eslint/eslint-plugin";
import vitest from "@vitest/eslint-plugin";
import { isCI } from "ci-info";
import chaiFriendlyPlugin from "eslint-plugin-chai-friendly";
import es from "eslint-plugin-es";
import jestDom from "eslint-plugin-jest-dom";
// import noOnlyTestsPlugin from "eslint-plugin-no-only-tests";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// import storybook from "eslint-plugin-storybook";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
// import youDontNeedLodashUnderscorePlugin from "eslint-plugin-you-dont-need-lodash-underscore";
import ts from "typescript-eslint";
import tsEslint from "typescript-eslint";

/**
 * @typedef {Object} ConfigParams
 * @property {string[]} [files]
 * @property {string[]} [ignores]
 * @property {Object} [rules]
 */

/**
 * @param {ConfigParams} [params]
 * @returns {Object}
 */

export default tsEslint.config(
  {
    ignores: [
      "coverage",
      "dist",
      "jest-coverage",
      "node_modules",
      "reports",
      "**/*.generated.*",
      "**/*.snap",
      "!.storybook/*",
      "storybook-static",
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  prettierRecommended,
  react.configs.flat.recommended,
  // ...storybook.configs["flat/recommended"],
  {
    plugins: {
      es,
      // "no-only-tests": noOnlyTestsPlugin,
      unicorn,
      "unused-imports": unusedImports,
      // "you-dont-need-lodash-underscore": fixupPluginRules(youDontNeedLodashUnderscorePlugin),
      "react-hooks": reactHooks,
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off", // support developer preference (type vs interface)
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@eslint-community/eslint-comments/disable-enable-pair": "off",
      "arrow-body-style": "warn",
      "no-only-tests/no-only-tests": ["warn", { fix: true }],
      "no-unneeded-ternary": "warn",
      "prettier/prettier": "warn",
      "unicorn/better-regex": "warn",
      "unicorn/no-array-for-each": "warn",
      "unicorn/no-await-in-promise-methods": "warn",
      "unicorn/no-length-as-slice-end": "warn",
      "unicorn/no-object-as-default-parameter": "warn",
      "unicorn/no-useless-fallback-in-spread": "warn",
      "unicorn/no-useless-length-check": "warn",
      "unicorn/no-useless-promise-resolve-reject": "warn",
      "unicorn/no-useless-spread": "warn",
      "unicorn/number-literal-case": "warn",
      "unicorn/numeric-separators-style": "warn",
      "unicorn/prefer-array-find": "warn",
      "unicorn/prefer-array-flat-map": "warn",
      "unicorn/prefer-array-flat": "warn",
      "unicorn/prefer-array-index-of": "warn",
      "unicorn/prefer-array-some": "warn",
      "unicorn/prefer-date-now": "warn",
      "unicorn/prefer-includes": "warn",
      "unicorn/prefer-logical-operator-over-ternary": "warn",
      "unicorn/prefer-math-min-max": "warn",
      "unicorn/prefer-node-protocol": "warn",
      "unicorn/prefer-regexp-test": "warn",
      "unicorn/prefer-set-size": "warn",
      "unicorn/prefer-spread": "warn",
      "unicorn/prefer-string-starts-ends-with": "warn",
      "unicorn/prefer-structured-clone": "warn",
      "unicorn/throw-new-error": "warn",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": "off",
      // ...youDontNeedLodashUnderscorePlugin.configs["all-warn"].rules,
      "no-console": isCI ? "error" : "warn",
      "no-restricted-imports": [
        "error",
        {
          name: "@emotion/react/macro",
          message: 'Please use "@emotion/react" instead. The macro requires Babel.',
        },
        {
          name: "@emotion/styled/macro",
          message: 'Please use "@emotion/styled" instead. The macro requires Babel.',
        },
        {
          name: "react-router",
          message: 'Please import from "react-router-dom".',
        },
        {
          name: "react-router-dom",
          importNames: ["Navigate", "redirect", "useParams"],
          message: 'Please import from "src/router.ts".',
        },
        {
          name: "lodash",
          message: "Please use synthetic imports like 'import xyz from \"lodash/xyz\"' for smaller bundle sizes.",
        },
        {
          name: "react-router",
          message: 'Please import from "react-router-dom".',
        },
        {
          name: "react-router-dom",
          importNames: ["BrowserRouter"],
          message: 'Please use "MemoryRouter" for tests.',
        },
      ],
      "es/no-classes": "error",
      "no-alert": "error",
      // https://github.com/emotion-js/emotion/blob/main/docs/eslint-plugin-react.mdx
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "react/prefer-stateless-function": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
    },
  },
  {
    files: ["public/mockServiceWorker.js"],
    rules: {
      "@eslint-community/eslint-comments/no-unlimited-disable": "off",
    },
  },
  {
    files: ["test-runner-jest.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
  {
    extends: [chaiFriendlyPlugin.configs.recommendedFlat, jestDom.configs["flat/recommended"]],
    files: ["**/*.{spec,test}.*", "src/setupTests.ts", "**/*.{spec,test}.*", "test/**/*.ts", "**/__tests__/**/*.ts"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/no-focused-tests": "warn",
      "vitest/prefer-expect-resolves": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.stories.*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "off",
    },
  },
  {
    // the common typescript-eslint rules don't require a tsconfig.json file, but these rules do
    extends: ts.configs.stylisticTypeChecked,
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { project: true } },
    rules: {
      "@typescript-eslint/prefer-optional-chain": "warn",
    },
  },
  {
    files: ["**/*.gql"],
    languageOptions: {
      parser: graphqlEslint.parser,
    },
    plugins: { "@graphql-eslint": graphqlEslint },
    rules: {
      ...graphqlEslint.configs["flat/operations-recommended"].rules,
      "@graphql-eslint/no-deprecated": "warn", // warn instead of error
      "@graphql-eslint/require-selections": "warn", // warn instead of error
    },
  },
  {
    files: ["**/*.{spec,test}.*"],
    rules: {
      "es/no-classes": "off",
      "react/display-name": "off",
    },
  },
  {
    files: ["**/*.stories.*"],
    rules: {
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "storybook/context-in-play-function": "off",
    },
  },
);

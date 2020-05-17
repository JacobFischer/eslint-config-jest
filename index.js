// @ts-check

/** @type {import("eslint").Linter.Config} */
const jestEslintConfig = {
    env: {
        node: true,
        jest: true,
        "jest/globals": true,
    },
    extends: [
        "plugin:jest/recommended",
    ],
    plugins: [
        "jest",
    ],
};

module.exports = jestEslintConfig;

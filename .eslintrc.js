module.exports = {
    plugins: ["react", "jest", "import"],
    extends: [
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "prettier",
        "prettier/react",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    settings: {
        react: {
            version: "detect", // Automatically detect the react version
        },
    },
    env: {
        browser: true,
        es6: true,
        amd: true,
        node: true,
        jest: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        semi: [2, "never"],
        "linebreak-style": "off",
        "react/jsx-props-no-spreading": "off",
        "no-shadow": "off",
        "import/prefer-default-export": "off",
        "no-restricted-globals": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", ["parent", "sibling"]],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "no-unused-vars": "error",
        "no-case-declarations": "off",
        "react/prop-types": 0,
    },
}

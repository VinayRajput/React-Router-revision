const { join } = require("path");
module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2019,
        project: join(__dirname, "./tsconfig.json"),
        sourceType: "module"
    },
    plugins: ["etc"],
    extends: [],
    rules: {
        "etc/no-t": "error"
    }
};
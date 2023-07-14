module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jasmine":true,
        "protractor":true,
        "node":true,
        "jest":true,
        
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prefer-arrow",
        "jsdoc",
        
    ],
    "rules": {
    }
}

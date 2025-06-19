// eslint.config.js
const nextPlugin = require("@next/eslint-plugin-next");

module.exports = [
    // This is the default recommended configuration
    {
        rules: {
            // You can add any custom rules here
        },
    },
    // Configuration for Next.js
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },
];
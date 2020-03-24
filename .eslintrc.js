module.exports = {
    extends: [
        "airbnb",
    ],
    env: {
        node: true,
    },
    rules: {
        "indent": ["error", 4],
        "linebreak-style" : 0,
        // No errors on using devDependencies in tests
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": [
                    "**/*.test.ts"
                ]
            }
        ]
    },
}
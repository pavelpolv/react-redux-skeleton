module.exports = {
  "extends": "standard",
  "plugins": ["react"],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "comma-dangle": 0,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecotators": true
    }
  }
};

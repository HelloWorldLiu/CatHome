module.exports = {
  "env": {
    "node": true
    // "es2020": true
  },
  "globals": {
    "__DEV__": true,
    "__WECHAT__": true,
    "__ALIPAY__": true,
    "App": true,
    "Page": true,
    "Component": true,
    "Behavior": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "rules": {
    //没有用到的变量进行警告
    "no-unused-vars": "warn",
    //统一缩进两个空格
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    //字串用双引号
    "quotes": [
      "error",
      "double"
    ],
    //分号
    "semi": [
      "error",
      "always"
    ],
    //末尾禁止使用逗号
    "comma-dangle": ["error", "never"],
    //最大长度
    "max-len": [
      "warn",
      {
        code: 120
      }
    ]
  }
};

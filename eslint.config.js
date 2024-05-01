import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import babelParser from "@babel/eslint-parser"

export default [
  {languageOptions: {
    globals: globals.browser,
    ecmaVersion: 2020,
    parser: babelParser
   }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
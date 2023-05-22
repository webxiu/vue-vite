# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

```
{
  /** 单行字符数，超出换行 */
  printWidth: 160,
  /** tab缩进空格 n */
  tabWidth: 2,
  /** true[使用tab缩进符缩进]; false[使用空格缩进] */
  useTabs: false,
  /** 行尾是否需要分号 */
  semi: true,
  /** 双引号 */
  quotes: false,
  /** 单引号 */
  singleQuote: true,
  /** jsx 单引号 */
  jsxSingleQuote: false,
  /** 行末尾逗号 [<es5|none|all>] */
  trailingComma: 'none',
  /** 大括号内的首尾空格 eg:{ 首尾空格 ExtendsClassWrap 首尾空格 } */
  bracketSpacing: true, //
  /** 箭头函数，只有一个参数的时候，是否需要括号 <always=true|avoid=false> */
  arrowParens: 'always',
  /**
   * 每个文件格式化的范围是文件的全部内容
   * 从 rangeStart int = 0 开始格式化
   * 到 rangeEnd   int = Infinity 结束格式化
   * 从0到无穷大，整个文件
   */
  rangeStart: 0,
  rangeEnd: Infinity,
  /** 是否需要写文件开头的 @prettier */
  requirePragma: false,
  /** 是否需要自动在文件开头插入 @prettier */
  insertPragma: false,
  /** 使用的换行标准 <always|never|preserve> */
  proseWrap: 'preserve',
  /** 根据显示样式决定 html 要不要换行 */
  htmlWhitespaceSensitivity: 'css',
  /** 换行符 <lf|crlf|cr|auto> */
  endOfLine: 'auto',
  /** 注释格式化 */
  commentFormat: true
}
```

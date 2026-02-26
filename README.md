# 项目目录

playwright-demo/
├─ tests/
│ ├─ login.spec.js
│ └─ order.spec.js
├─ pages/
│ ├─ LoginPage.js
│ ├─ InventoryPage.js
│ ├─ CartPage.js
│ └─ CheckoutPage.js
├─ playwright.config.js

### 测试登录

npx playwright test tests/login.spec.js

### 加上 headed 模式， 可以看到用浏览器打开

npx playwright test tests/login.spec.js --headed

### debug模式

npx playwright test tests/login.spec.js --debug

## 打开 Trace Viewer

### 开启 trace

打开playwright.config.js
找到 use: 这一段，改成：

```
use: {
  trace: 'on',
},
```

### 运行测试

在项目根目录运行：

```
npx playwright test
```

跑完之后，会在项目里生成一个文件夹：

```
test-results/
```

里面会有类似：

```
test-results/login-user-can-login-successfully-chromium/trace.zip
```

### 查看Trace Viewer

运行:

```
npx playwright show-trace test-results/**/trace.zip
```

另一种更简单方法:

```
npx playwright show-report
```

### 使用typeScript

```
npm install -D typescript
```

在根目录添加 tsconfig.json 文件
package.json 里，删掉type

### 加上ESLint

```
npm install -D eslint @eslint/js typescript-eslint
npm install -D globals
```

- 在根目录创建 eslint.config.js
- 在 package.json 加：

```
"scripts": {
  "lint": "eslint ."
}
```

- 运行:

```
npm run lint
```

- 安装 Playwright 专用规则：

```
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-playwright
```

在 config 里加：

```
import playwright from 'eslint-plugin-playwright'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },
]
```

### 整合Prettier，检查“代码格式”

- 安装依赖

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

- 创建 Prettier 配置: .prettierrc

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

- 修改 eslint.config.js
- package.json 加脚本

```
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

- 测试

```
npm run lint
npx eslint tests/loginAndOrder.spec.ts
```

- 自动修复格式：

```
npm run format
```

## TODO 用 storageState 保存登录状态

用 storageState 保存登录状态
跳过 UI 登录

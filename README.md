# 项目目录
playwright-demo/
 ├─ tests/
 │   ├─ login.spec.js
 │   └─ order.spec.js
 ├─ pages/
 │   ├─ LoginPage.js
 │   ├─ InventoryPage.js
 │   ├─ CartPage.js
 │   └─ CheckoutPage.js
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

## TODO 用 storageState 保存登录状态
用 storageState 保存登录状态
跳过 UI 登录
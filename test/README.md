# Saucedemo Test Automation

Automated test suite for [saucedemo.com](https://www.saucedemo.com) built with WebdriverIO and Mocha.

## Technologies
- WebdriverIO v9
- Mocha
- Node.js v20
- Allure Reporter

## Project Structure

test/
├── pageobjects/
│   ├── cart.page.js
│   ├── checkout.page.js
│   ├── footer.page.js
│   ├── inventory.page.js
│   ├── login.page.js
│   ├── page.js
│   └── products.page.js
└── specs/
├── checkout.spec.js
├── footer.spec.js
├── login.spec.js
└── products.spec.js

## Test Cases
| ID | Title | Status |
|----|-------|--------|
| TC1 | Valid Login | ✅ |
| TC2 | Login with invalid password | ✅ |
| TC3 | Login with locked out user | ✅ |
| TC4 | Logout | ✅ |
| TC5 | Saving cart after logout | ✅ |
| TC6 | Sorting | ✅ |
| TC7 | Footer Links | ✅ |
| TC8 | Valid Checkout | ✅ |
| TC9 | Checkout without products | 🐛 BUG - System allows checkout with empty cart |

## How to Run

### Prerequisites
- Node.js v20
- Google Chrome

### Installation
```bash
npm install
```

### Run Tests
```bash
npm run wdio
```

### Generate Allure Report
```bash
npx allure generate allure-results --clean
npx allure open
```
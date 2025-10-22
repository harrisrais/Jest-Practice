# javascript-testing-with-jest-crash-course

This repository contains example code, tests, and notes created while following the **JavaScript Testing with Jest – Crash Course** video. It demonstrates setting up **Jest**, writing synchronous & asynchronous tests, using mocks and snapshots, and running tests with coverage/watch.

---

## What I learned
- Installing and configuring Jest (`npm init -y`, `npm i -D jest`)
- Writing test suites with `describe`, `test`/`it`, and `expect` + **matchers**
- Testing **async code** (callbacks, Promises, `async/await`)
- Using **mocks** (`jest.fn()`, `jest.mock()`) and **spies** (`jest.spyOn()`)
- **Snapshot testing** and generating **coverage reports**

---

## Repo structure (suggested)
```
├── package.json
├── README.md
├── src/
│ └── math.js
├── tests/
│ └── math.test.js
└── jest.config.js (optional)
```

## Quick start (copy-paste)
```bash
# 1. clone repo (or create new folder)
git clone <your-repo-url>
cd javascript-testing-with-jest-crash-course

# 2. initialize & install jest
npm init -y
npm install --save-dev jest

# 3. add test script to package.json
# "scripts": { "test": "jest" }

# 4. run tests
npm test

# 5. run in watch mode (reruns when files change)
npx jest --watch

# 6. run coverage report
npx jest --coverage
```

## Example test (copy to __tests__/math.test.js)
### src/math.js
```bash
function add(a, b) { return a + b; }
async function fetchData() { /* example async function */ }
module.exports = { add, fetchData };
```

### __tests__/math.test.js
```bash
const { add } = require('../src/math');

describe('math utilities', () => {
  test('add() adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## Useful commands / cheatsheet
| Command                     | Description                       |
| :-------------------------- | :-------------------------------- |
| `npm test`                  | Run all tests                     |
| `npx jest --watch`          | Watch mode (rerun on file change) |
| `npx jest --coverage`       | Generate coverage report          |
| `jest.fn()`                 | Create a mock function            |
| `jest.spyOn(obj, 'method')` | Spy on existing object method     |
| `jest.mock('moduleName')`   | Mock an entire module             |


## Sources / references
Video: JavaScript Testing with Jest – Crash Course
 (FreeCodeCamp)

Jest official docs: https://jestjs.io/



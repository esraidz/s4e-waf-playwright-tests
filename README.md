# S4E – WAF DNS Scanner Test Automation

## Project Overview

This repository contains automated test scenarios for the following module:

WAF Detection from DNS Records Scanner  
https://s4e.io/tools/waf-detection-from-dns-records

The objective of this project is to demonstrate edge case analysis, validation testing, modal behavior testing and UI automation using Playwright.

---

## Test Coverage

The following areas were tested:

### Page Load Validation
- Input field visibility
- "SCAN NOW" button visibility

### Input Validation
- Empty input
- Whitespace-only input
- Invalid format input (e.g., `abc`)

### Modal Behavior
- Validation modal appearance
- Modal close functionality

### UX Behavior
- Retry button behavior analysis

---

## Automated Test Cases

1. Page loads correctly  
2. Empty input shows inline validation error  
3. Whitespace-only input shows inline validation error  
4. Invalid input triggers validation modal  
5. Modal can be closed  
6. Retry button behavior validation  

All tests are written using Playwright and executed successfully.

---

## Identified Issue

The "Retry" button closes the validation modal but does not reset the input field.

This behavior may cause UX ambiguity for users.

Detailed documentation is available in:

`bug/bug-report.md`

---

## Tech Stack

- Node.js
- Playwright
- TypeScript

---

## Running the Tests

Install dependencies:

```bash
npm install

Run the tests:

npx playwright test
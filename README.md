
# Project Title : 
Playwright_Api_Auto_Leela

## 📑 Table of Contents
- [Introduction] (#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Reporting](#reporting)
- [Enhancement](#ehnancement)

## 📖 Introduction
This is a API Automation project using Playwright and Typescript and used cucumber for Gherkin language to create BDD scenarios.
I used CucumberJS runner with Playwright as a library to execute BDD scenarios.
Two scenarios are created one for positive and another for negative tests, This covers the functional  verification of the get api. The test automation scripts are executed by passing different sets of test data using scenario onlines with Examples.

## 🛠️ Prerequisites
Node.js (https://nodejs.org/) (v18.16.1 or higher recommended)
npm (https://www.npmjs.com/) (v9.5.1 or higher recommended)
VScode Editor
Playwright package  -- CHECK

## ▶️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/leelasetty/Playwright_Api_Auto_Leela/tree/master
   ```

2. **Navigate to the project directory:**

   ```bash
   cd PLAYWRIGHT_API_AUTO_LEELA
   ```

3. **Install dependencies:**

   ```bash
   npm install
   npm i @cucumber@cucumber -D
   npm i ts-node -D
   ```

4. **Setup runner file :**
    Add cucumber.json file
    Add script to package.json file  "test":"cucumber-js test"

## 🚀 Running Tests

  ```bash
  npm test
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- node-modules
|-- src
|     |--test
|          |-- features
|                  |--getAge.feature
|          |-- steps
|                  |--getAgeSteps.ts      
|-- test-results
|            |-- cucumber-report.html
|            |-- cucumber-report.json
|-- .gitignore
|-- cucumber.json
|-- package-lock.json
|-- package.json

```

- `test-results`: Contains the HTML and JSON reports for the tests results.
- `src`: Contains the actual test files. The features folder contains the feature file and step definition file is under folder steps. 
- `cucumber.json`: BDD test result file

## ⚙️ Configuration

- Modify `playwright.config.js` for playwright configuration settings such as
  - `baseURL`
  - `testDir`
  - `reporter`

## 📊 Reporting

Cucumber HTML report (Logs are attached) is stored in the `test-results` directory. The html report give a details description of the execution status like no of PASS and FAILED tests, time take, time of execution

## 🔭 Enhancement
The other important areas to cover the testing of API endpoints to ensure robustness and reliable are security, load and performance testing, where we can verify for Unauthenticated access, SQL injection and Multiple concurrent requests. 
These areas are out of scope for this project and expect for enhancement. 
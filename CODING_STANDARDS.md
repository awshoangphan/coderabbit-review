# NodeJs Coding Rules & Security BWV

## Table of Contents
- [Common Rules](#common-rules)
- [1. Naming](#naming)
- [2. Styling](#styling)
- [3. Comments](#comments)
- [4. Usage](#usage)
- [5. Security](#security)
- [6. Implement Lint](#implement-lint)

## Common Rules
- **PRIORITY**: Always check Redmine wiki first. Follow project-specific conventions over this document.
- **APPLICABILITY**: These rules apply to BWV projects. Leaders select rules based on style.
- **ENFORCEMENT**: Use ESLint/Prettier for auto-checks. Violations: Warn in reviews, error in pre-merge.

## 1. Naming

Rules for variables, functions, classes in TypeScript/Node.js. Use camelCase for variables, PascalCase for classes/enums.

- **Rule 1.1: Use camelCase for variables (REQUIRED)**  
Avoid snake_case or kebab-case.  
  
// Bad
let first_name = 'John';

// Good
let firstName = 'John';

- **Rule 1.2: Use meaningful names (REQUIRED)**
Names should describe purpose, avoid single letters except loops.  

// Bad
let a = 'John';
let b = 20;

// Good
let firstName = 'John';
let age = 20;

- **Rule 1.3: Avoid overly long names (RECOMMENDED)**
Keep concise but descriptive; max 30 chars if possible.

// Bad
let thisIsAVariableThatContainsTheFirstNameOfTheUser = 'John';

// Good
let firstName = 'John';
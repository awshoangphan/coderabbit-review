# NodeJs Coding Rules & Security BWV

## 1. Naming

Rules for variables, functions, classes in TypeScript/Node.js.

### [TS-NAMING-001] Use camelCase for variables 
- **Severity**: REQUIRED
- **Description**: Variable names must be in `camelCase`. Avoid `snake_case` or `kebab-case`.
- **Examples**:
  ```typescript
  // Bad - Do not use snake_case
  let first_name = 'John';

  // Good - Use camelCase
  let firstName = 'John';
  ```

### [TS-NAMING-002] Use meaningful names
- **Severity**: REQUIRED
- **Description**: Names should describe purpose, avoid single letters except loops.  
- **Examples**:
  ```typescript
    // Bad
    let a = 'John';
    let b = 20;

    // Good
    let firstName = 'John';
    let age = 20;
    ```
### [TS-NAMING-003] Avoid overly long names
- **Severity**: RECOMMEND
- **Description**: Keep concise but descriptive; max 30 chars if possible.
- **Examples**:
  ```typescript
  // Bad
  let thisIsAVariableThatContainsTheFirstNameOfTheUser = 'John';

  // Good
  let firstName = 'John';
  ```
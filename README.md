# Firebase: Handling Non-Existent Database Fields

This repository demonstrates a common error in Firebase applications: attempting to access a database field that does not exist.  The error arises from improper handling of asynchronous operations and potential discrepancies between the expected and actual database structure.

The `bug.js` file shows an example of this error.  `bugSolution.js` provides a solution using optional chaining and nullish coalescing to gracefully handle missing fields.

## How to Reproduce

1. Clone this repository.
2. Set up a Firebase project and configure the credentials.
3. Run `bug.js`. You should encounter an error when the code attempts to access a non-existent field.
4. Run `bugSolution.js`. This version handles the case where the field is missing without throwing an error.

## Solution

The solution uses JavaScript's optional chaining (`?.`) and nullish coalescing (`??`) operators to safely access the field. This approach avoids errors by returning `undefined` when the field is missing, allowing the application to gracefully handle the situation.
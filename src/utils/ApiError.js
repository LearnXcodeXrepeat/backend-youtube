// The ApiError class extends the built-in Error class to represent errors in API responses.
class ApiError extends Error {


    /**
     * Constructor for the ApiError class.
     * @param {number} statusCode - The HTTP status code for the error response.
     * @param {string} [message="Something Went Wrong"] - A message describing the error. Defaults to "Something Went Wrong".
     * @param {Array} [errors=[]] - An array of specific error details. Defaults to an empty array.
     * @param {string} [stack=""] - The stack trace for the error. Defaults to an empty string.
     */


    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        stack = ""
    ) {

        super(message);  // Calls the constructor of the parent Error class with the error message.

        this.statusCode = statusCode;  // The HTTP status code of the error response.
        this.errors = errors;          // An array of specific error details.
        this.data = null;              // No data is associated with an error response.
        this.message = message;        // The error message.
        this.success = false;          // Indicates that the response is not successful.

        // If a stack trace is provided, set it. Otherwise, capture the current stack trace.
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };

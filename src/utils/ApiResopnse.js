// The ApiResponse class is used to standardize the structure of API responses.
class ApiResponse {
    /**
     * Constructor for the ApiResponse class.
     * @param {number} statusCode - The HTTP status code for the response.
     * @param {string} [message="success"] - A message describing the response. Defaults to "success".
     * @param {any} data - The data to be included in the response.
     */
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode;  // The HTTP status code of the response.
        this.data = data;              // The data to be included in the response.
        this.message = message;        // A message describing the response, defaulting to "success".
        this.success = statusCode < 400; // A boolean indicating if the response is successful (status codes below 400 are considered successful).
    }
}

export { ApiResponse }
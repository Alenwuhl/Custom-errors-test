export default class CustomError {
    static createError({ name = "Error", cause, message, code = 1 }) {
        const error = new Error(message);
        error.name = name;
        error.code = code;
        error.cause = cause ? new Error(cause) : null;
        return error; // Devolver el error en lugar de lanzarlo
    }
}

import { err, ok } from "@mkvlrn/result";
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) {
        return err(new Error("cannot divide by zero"));
    }
    return ok(a / b);
}

export class Validator {
    static isEmptyString(valueString: string): void {
        if (valueString.length === 0) throw new Error(`is wrong value`);
    }
}


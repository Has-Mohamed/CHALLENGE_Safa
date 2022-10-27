export function isValueEmpty(value) {
    return value === '';
}
export function isValidEmail(value) {
    return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export function isValidNumber(value) {
    if (!/^-?\d+$/.test(value)) {
        return false;
    } else if (value.length > 13 || value.length < 8) {
        return false;
    }
    return true;
}

export function isPasswordValid(value) {
    return value.length > 8;
}
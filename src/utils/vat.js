/**
 * Add VAT to a value
 * @param {number} value base value
 * @param {number} vat vat to apply
 * @returns {number} the result value
 */
const addVat = (value = 0, vat = 23) => {
    const toAdd = (value / 100) * vat;
    const result = value + toAdd;
    return result;
}

export {
    addVat
}


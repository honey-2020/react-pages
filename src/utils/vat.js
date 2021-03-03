const addVat = (value = 0, vat = 23) => {
    const toAdd = (value / 100) * vat;
    const result = value + toAdd;
    return result;
}

export {
    addVat
}
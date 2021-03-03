import { addVat } from './vat.js';

it('addVat() - standard behavior', () => {
    expect( addVat(100)).toEqual(123);
});
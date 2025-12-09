const suma = require('./index');

test('suma 1 + 2 para que de 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma numeros negativos', () => {
    expect(suma(-1, -2)).toBe(-3);
});

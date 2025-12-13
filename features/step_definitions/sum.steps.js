const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let numero1, numero2, resultado;

// Lógica simple para pasar la prueba (simulando TDD)
const sumar = (a, b) => a + b;

Given('tengo los números {int} y {int}', function (int1, int2) {
  numero1 = int1;
  numero2 = int2;
});

When('los sumo', function () {
  resultado = sumar(numero1, numero2);
});

Then('el resultado debe ser {int}', function (expectedResult) {
  assert.strictEqual(resultado, expectedResult);
});

#!/usr/bin/env node

console.log('🧪 Ejecutando pruebas...');

// Prueba simple
function testSuma() {
  const resultado = 2 + 2;
  if (resultado === 4) {
    console.log('✅ Test 1: Suma básica - PASS');
    return true;
  }
  console.log('❌ Test 1: Suma básica - FAIL');
  return false;
}

function testString() {
  const texto = 'CI/CD';
  if (texto.length === 5) {
    console.log('✅ Test 2: Longitud de string - PASS');
    return true;
  }
  console.log('❌ Test 2: Longitud de string - FAIL');
  return false;
}

// Ejecutar pruebas
const test1 = testSuma();
const test2 = testString();

if (test1 && test2) {
  console.log('\n✨ Todas las pruebas pasaron exitosamente');
  process.exit(0);
} else {
  console.log('\n💥 Algunas pruebas fallaron');
  process.exit(1);
}
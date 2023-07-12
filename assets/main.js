//alert("hola nucba");

console.log(
  "EJERCICIO n° 1: Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. "
);

function miFuncion(nro) {
  if (nro % 2 === 0) {
    console.log(`El numero ${nro}, Es par`);
  } else {
    console.log(`El numero ${nro}, Es impar`);
  }
}
miFuncion(5);
miFuncion(10);

console.log(
  "EJERCICIO n° 2: Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. "
);

function compararNumeros(num8, num2) {
  if (num8 === num2) {
    console.log(`Los números ${num8} y ${num2}, son iguales`);
  } else if (num8 > num2) {
    console.log(`${num8} es mayor que ${num2}`);
  } else {
    console.log(`${num8} es menor que ${num2}`);
  }
}

compararNumeros(18, 10);
compararNumeros(10, 18);
compararNumeros(10, 10);

console.log(
  "EJERCICIO n° 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5."
);

function esMultiplo(num5) {
  if (num5 % 5 == 0) {
    console.log(`${num5} es múltiplo de 5`);
  } else {
    console.log(`${num5} no es múltiplo de 5`);
  }
}

esMultiplo(25);
esMultiplo(23);

console.log(
  "EJERCICIO n° 4: Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número."
);

let num6 = 8;
function impresion(num6) {
  for (let i = 0; i <= num6; i++) {
    console.log(i);
  }
}

impresion(num6);

console.log(
  "EJERCICIO n° 5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado."
);

// function cantidadPalabra(palabra, numero) {
//   let resultado = "";
//   for (let i = 0; i < numero; i++) {
//     resultado += palabra + " ";
//   }
//   console.log(resultado);
// }

// let palabra = "texto";
// let numero = 5;
// cantidadPalabra(palabra, numero);
function cantidadPalabra(palabra, numero) {
  console.log(palabra.repeat(numero));
}

cantidadPalabra("Hola ", 3);

// function cantidadPalabra(palabra, num7) {
//   for ( let i = 0; i <= num7; i++) {
//     console.log(palabra);
//   }
// }

// let palabra = "texto";
// let num7 = 4;
// cantidadPalabra(palabra, num7);

console.log(
  "EJERCICIO n° 6: Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array."
);

function array(Array) {
  for (let i of Array) {
    console.log(i);
  }
}

let Array = [1, 2, 3, 4, 5, 6];
array(Array);

console.log(
  "EJERCICIO n° 7: Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es 0"
);

function descartar(array) {
  if (array.length !== 10) {
    console.log("El array debe contener exactamente 10 elementos.");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
descartar(miArray);

console.log(
  "EJERCICIO  n° 8: Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro."
);

function multArray(array2) {
  for (let i = 0; i < array2.length; i++) {
    console.log(array2[i] * multiplicador);
  }
}

let multiplicador = 3;
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

multArray(array2);

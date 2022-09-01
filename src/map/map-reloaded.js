// Map puede seleccionar los elementos de todo un array de objetos.

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  }
];

const res = orders.map(item => item.total * 100);

console.log('Original', orders);
console.log('Nuevo', res);


// Agregar un nuevo atributo a cada uno de los objetos sin modificar el array original.
const res2 = orders.map(item => {

	item.tax = item.total * .19;

	return item;
});

console.log('Original', orders);
console.log('Nuevo 2', res2);

// Cuando se copia un objeto que tiene una referencia en memoria, no copia un nuevo elemento sino que copia la referencia en memoria; por lo tanto si se puede modificar el array original.


// Para no copiar la referencia en memoria y no modificar el array original.
const res3 = orders.map(item => {

	return {
		...item,
		tax: .19 
	}
});

console.log('Original', orders);
console.log('Nuevo 3', res3);
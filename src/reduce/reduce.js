// Reduce, consiste en retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.
// No duvuelve otro array.
// Es un método inmutable.
// La función de reduce recibe 2 parámetros, el callback y el estado inicial.
// El callback recibe 2 parámetros: El acumulador (sea una variable o un numero) y el iterador.


const totals = [1,2,3,4];

// Con for
let sum = 0;

for (let i = 0; i < totals.length; i++) {

	const element = totals[i];
	sum += element;
}

console.log('For', sum);


// Con reduce
const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('Reduce', rta);
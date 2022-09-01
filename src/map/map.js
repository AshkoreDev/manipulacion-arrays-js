// Map consiste en crear un nuevo array a partir de los elementos originales de otro array, transformados mediante una función (callback).
// Es un método inmutable, es decir que no modifica el array original sino que crea uno nuevo con los resultados, tendrá el mismo número de elementos que el array original.


const letters = ['a', 'b', 'c'];

// Con for.
let newArray = [];

for(let i = 0; i < letters.length; i++) {

	const element = letters[i];
	newArray.push(element + '++');
}

console.log('Original', letters);
console.log('Nuevo', newArray);



// Con map.
const newArray2 = letters.map(item => item + '++');

console.log('Original', letters);
console.log('Nuevo 2', newArray2);
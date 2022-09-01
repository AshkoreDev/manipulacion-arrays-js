// Filter sirve para crear un nuevo array a partir de los elementos originales de otro array, filtrados mediante una función (callback), que indica la condición a cumplir.
// El nuevo array tendrá los elementos que hayan cumplido la condición y no puede tener más elementos que el array original.
// Es un método inmutable.

const words = ['spray', 'limit', 'elite', 'exuberant'];

// Con for
const newArray = [];

for (var i = 0; i < words.length; i++) {
	
	const element = words[i];

	if (element.length >= 6) {

		newArray.push(element);
	}
}

console.log('Original', words);
console.log('Nuevo', newArray);


// Con filter 
const newArray2 = words.filter(item => item.length >= 6);

console.log('Original', words);
console.log('Nuevo 2', newArray2);
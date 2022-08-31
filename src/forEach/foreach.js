// ForEach consiste en ejecutar una función callback para cada uno de los elementos a iterar.
// A diferencia del ciclo For, ForEach permite realizar algoritmos con una menor cantidad de líneas obteniendo el mismo resultado.


const letters = ['a', 'b', 'c'];

// Iterar con For.
for (let i = 0; i < letters.length; i++) {
		
	const element = letters[i];
	console.log('Con for', element);
}


// Iterar con ForEach.
letters.forEach(item => console.log('Con forEach', item));
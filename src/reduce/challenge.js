// Contar cuantos numeros hay por rangos. De 1-5, 6-8 y 9-10.
const numbers = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];

const rta = numbers.reduce((obj, item) => {

	if(item <= 5) {

		obj['1-5']++;

	} else if (item <= 8) {

		obj['6-8']++;

	} else {

			obj['9-10']++;
	}

	return obj;

}, {
	'1-5': 0,
	'6-8': 0,
	'9-10': 0
});

console.log(rta);
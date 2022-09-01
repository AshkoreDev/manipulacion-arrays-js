// Reduce con arrays, retornar en un objeto cuantas veces existe un numero en el array.
const items = [1,3,2,3,1,3,5,8];

const rta = items.reduce((obj, item) => {

	if(!obj[item]) {

		obj[item] = 1;

	} else {

		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(rta);


// Reduce con objetos,
const data = [
  {
    name: "Nicolas",
    level: "low"
  },
  {
    name: "Andrea",
    level: "medium"
  },
  {
    name: "Zulema",
    level: "hight"
  },
  {
    name: "Santiago",
    level: "low"
  },
  {
    name: "Valentina",
    level: "medium"
  },
  {
    name: "Lucia",
    level: "medium"
  }
];

const rta2 = data
	.map(item => item.level)
	.reduce((obj, item) => {

	if(!obj[item]) {

		obj[item] = 1;

	} else {

		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(rta2);
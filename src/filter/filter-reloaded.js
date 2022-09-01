// Filter con objetos.
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

const newArray = orders.filter(item => item.delivered);
const newArray2 = orders.filter(item => item.delivered && item.total >= 100);

console.log('Original', orders);
console.log('Nuevo', newArray);
console.log('Nuevo 2', newArray2);


// Buscador con filter
const search = (query) => {

  return orders.filter(item => {

    return item.customerName.includes(query);
  });
};


console.log('Buscar', search('Nico'));
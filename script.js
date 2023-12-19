const fruits = ['banana', 'morango', 'manga'];

//O "map" é semelhante ao "foreach" porém ele retornar um valor a cada iteração enquanto o foreach não.
var capitalizedFruits = fruits.map(fruit => {
	return fruit.toUpperCase();
});

console.log(capitalizedFruits);
console.log(fruits);

capitalizedFruits = fruits.forEach(fruit => {
	return fruit.toUpperCase();
});

//Percebea que o valor da váriavel é "undefined"
console.log(capitalizedFruits);
console.log(fruits);
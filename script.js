const person = {
	name: 'Jorge',
	age: 37
};

//Colocando os atributos entre chaves, se passarmos um Objeto com os mesmos atributos, o JS consegue fazer a relação
function introduce ({name, age}){
	console.log(`Olá, meu nome é ${name}, e eu tenho ${age} anos`);
}

introduce(person);

const fruits = ['banana','morango','laranja'];

//const firstFruit = fruits[0];
//const secondFruit = fruits[1];

//Podemos fazer deste jeito agora
const [firstFruit, secondFruit, terceira] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(terceira);

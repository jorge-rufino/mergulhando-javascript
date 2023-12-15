class Human {
	hungry = true;
	name;
	age;
	sex;

	//Construtor é executado na criação do objeto. Ele é opicional dentro da classe
	constructor(props){
		this.name = props.name;
		this.age = props.age;
		this.sex = props.sex;
		console.log('Objeto criado');
	}

	//Metodo
	eat() {
		this.hungry = false;
	}
}

const person = new Human({
	name: 'Jorge',
	age: 37,
	sex: 'Masculino'
});

const person2 = new Human({
	name: 'Nick',
	age: 4,
	sex: 'Masculino'
});

person.eat();
person2.age = 17;

console.log(person);
console.log(person2);
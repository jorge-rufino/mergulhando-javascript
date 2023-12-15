const person = {
	name: 'Italo',
	age: 14,
	contact: {
		foo: {
			bar: {
				email: 'daniel.bonifacio@algaworks.com'
			}
		}
	}
};

//Colocando o nome da variavel entre parenteses, o JS faz a relacao entre elas e o Objeto criando variaveis com o mesmo no 
//dos atributos do Objeto
const {name, age, contact: {foo: {bar: { email } }}} = person;

//Pegamos o "name" mas para criar uma variavel com nome diferente, utilizamos o ":" seguido do nome que queremos
const {name: nome} = person;

console.log(name);
console.log(age);
console.log(email);

console.log(nome);
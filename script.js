const parts = ['ombro', 'joelho'];

//Desse jeito, sempre que fosse adicionado um valor no array acima, teriamos que adicionar no array abaixo
//const sentence = ['cabeça', parts[0],parts[1], 'pés'];

//Desta forma fica dinâmico
const sentence = ['cabeça', ...parts, 'pés'];
console.log(sentence);

/*
function createUser(name, age, contact1, contact2, contact3) {
	return {
		name,
		age,
		contacts: [contact1,contact2,contact3]
	};
}
*/
function createUser(name, age, ...contacts) {
	return {
		name,
		age,
		contacts
	};
}

console.log(createUser('Jorge',37,'email1','email2'));

const immutableArray = ['select', '*', 'from', 'posts'];

//Desta forma estamos apenas criando uma referencia ao objeto "immutableArray", então qualquer alteraçao em "mutableArray" irá para "immutableArray"
//const mutableArray = immutableArray;

const mutableArray = [...immutableArray];
mutableArray.push('where id = 1');
const user = {
	name: 'danielbonifacio',
	email: 'contato@danielbonifacio.com.br'
};

//Cria apenas uma referencia ao objeto "user"
//const newUser = user;
//newUser.email = 'joao@zinho.com';
//newUser.name = 'joaozinho123';
//console.log(user);
//console.log(newUser);

//Clona o objeto
const newUser = {...user};

console.log(user);
console.log(newUser);

newUser.email = 'joao@zinho.com';
newUser.name = 'joaozinho123';

console.log(newUser);
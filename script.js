function greet () {
	//Lembrando, "arguments" é uma LISTA especial (não é um ARRAY), portanto não podemos usar o "foreach", por isso criamos o Array "args" com base em "arguments"
	const args = Array.from(arguments, function (nome) {
		return  '!' + nome + '!';
	});
	
	args.forEach(argument => {
		console.log(`Hello, ${argument}`);
	});
}

greet('Jorge','Nick','Lari');
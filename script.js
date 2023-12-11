//Podemos definir um valor padrão para uma funçao, assim caso ela seja chamada sem paramentro, este valor será usado
function greet ( name = 'Desenvolvedor'){
	return 'Como vai, ' + name;
}

var greeting = greet();
console.log(greeting);

greeting = greet('Jorge');
console.log(greeting);
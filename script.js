const name = 'Jorge';
const age = 37;

//Padrão
const sentence = 'Olá, meu nome é ' + name + ' e eu tenho ' + age + ' anos.';

//Template String. Usamos a crase em vez de aspas duplas ou simples
const sentence2 = `Olá, meu nome é ${name} e eu tenho ${age} anos.`;

//Padrao. Nestes casos precisamos usar a barra invertida e mesmo assim não mantem a quebra de linha e identação
const html = '\
	<ul>\
		<li>\
			${name}\
		</li>\
		<li>\
			${age}\
		</li>\
	</ul>\
';

//Template String. Mantem a quebra de linha e identação
const html2 = `
	<ul>
		<li>
			${name}
		</li>
		<li>
			${age}
		</li>
	</ul>
`;


console.log(sentence);
console.log(sentence2);

console.log('\n'+html);
console.log(html2);
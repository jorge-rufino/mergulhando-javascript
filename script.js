
//"resolve" é um método que deve ser usado quando a promise for resolvida
//"reject" é um método que deve ser usando quando a promisse for rejeitada
function handleClick () {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			//resolve(123);
			reject('Erro inesperado');
		}, 5000);
	});
}

//"then" é um método que só será executado caso a promisse seja resolvida
//"catch" é um método que só será executado caso a promisse seja rejeitada
const result = handleClick()
	.then(res => {
		console.log(123 === res);
		console.log('finalizou');
		return 'batata';
	})
	.catch(err => {
		console.log('houve um erro');
		console.log(err);
	});
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => {
		const data = res.json();			//Transforma a resposta da API em Json
		console.log('Os dados não aparecem, por que?' + data);	//Porque ".json()" tb é uma "promise"
	});

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then( async (res) => {							//Transformando a promise em "async" 
		const data = await res.json();		//Esperando executar a promise de transformar em json		
		console.log(data);								//Agora a resposta json é exibida
	});	

//Promise chaining. Usamos 2 "then()", o primeiro executa a promise de transformar em json
//O segundo captura a resposta json, podendo trabalhar os dados
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => res.json())
	.then(data => {
		console.log('userId:'+data.userId);
		console.log('id:'+data.id);
		console.log('title:'+data.title);
		console.log('completed:'+data.completed);
	});

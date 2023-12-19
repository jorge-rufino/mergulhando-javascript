const fruits = ['banana','morango','cacau'];

function eatAllFruits(){
	//Fruta é cada elemento da lista e "index" é o indice do elemento dentro da lista
	fruits.forEach( (fruta, index) => {
		console.log(`hummm, acabei de comer ${fruta}`);
		console.log(`Ele era o ${index + 1 } da minha lista`);
	});
}

eatAllFruits();
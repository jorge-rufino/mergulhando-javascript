const students = [
	{ name: 'Lucas',    grade: 8 },
	{ name: 'Mario',    grade: 2 },
	{ name: 'Jean',     grade: 10 },
	{ name: 'Rogerio',  grade: 6 },
	{ name: 'Marcos',   grade: 5 },
	{ name: 'Jean',   grade: 9 },
];

//Diferença para o "filter", é que o "find" retorna somente um objeto enquanto o "filter" retorna um array de objetos.
//"Find" funciona como um "findFirst" pois em caso de valores repetidos, assim que ele encontra o primeiro, ele para de iterar.
const findStudent = students.find( student => {

	/*		***Pode ser desta forma tb***
	if(student.name === 'Jean'){
		return true;
	}	*/

	return student.name === 'Jean';
});

//Retorna o objeto
console.log(findStudent);
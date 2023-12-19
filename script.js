const students = [
	{ name: 'Lucas',    grade: 8 },
	{ name: 'Mario',    grade: 2 },
	{ name: 'Jean',     grade: 10 },
	{ name: 'Rogerio',  grade: 6 },
	{ name: 'Marcos',   grade: 5 },
];

//Queremos saber os pontos totais da turma, abaixo de 30 pontos precisará de atenção

//Forma antiga de fazer. Gera efeito colateral pois se executarmos o laço varias vezes vai aumentar o "totalGrade"
//let totalGrade = 0;
//students.forEach( student => {	totalGrade += student.grade; });

//Ele recebe 2 parametros, o primeiro é uma função e o segundo é o valor inicial que no caso é 0
//"Prev" está recebendo inicialmente o valor "0" e o "current" recebe o valor do primeiro objeto, no caso "Lucas"
//O "return" irá alterar o valor do "prev" para a próxima iteração, fazendo assim a soma das notas.
const totalGrade = students.reduce( 
	(prev, current) => {
		
		return prev + current.grade;
	}, 
	0
);

//31
console.log(totalGrade);


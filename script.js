const students = [
	{ name: 'Lucas',    grade: 8 },
	{ name: 'Mario',    grade: 2 },
	{ name: 'Jean',     grade: 10 },
	{ name: 'Rogerio',  grade: 6 },
	{ name: 'Marcos',   grade: 5 },
];

//Retorna uma array com os elementos baseados na condição do "return"
const failedStudents = students.filter( student => {
	return student.grade < 7;
});

console.log(failedStudents);
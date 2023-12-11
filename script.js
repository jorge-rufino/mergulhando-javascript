var person1 = {
	name: 'Jorge Rufino',
	age: 37,
	sex: 'male'
};

var person2 = {
	name: 'Nickolas Rufino',
	age: 4,
	sex: 'male'
};

var person3 = {
	name: 'Larissa',
	age: 28,
	sex: 'female'
};

var listPerson = [person1, person2, person3];

for (var i =0; i < listPerson.length; i++){
	console.log(listPerson[i]);
}

console.log('\n');

for (var person of listPerson){
	console.log(person);
}

console.log('\n');

listPerson.forEach(element => {
	if(element.age < 30){
		console.log(element);
	}
});
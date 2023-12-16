const fruits = ['banana','morango','laranja','abacaxi'];

//usamos a "," para ir pulando os indices do array
const [ , ,thirdItem] = fruits;

//Laranja
console.log(thirdItem);

const person = { name:'Jorge', age: 37 };
const person2 = { name:'Nick', age: 4 };
const person3 = { name:'Lari', age: 30 };

const friends = [person,person2,person3];

//Desestrurando Array e Objeto. Pegamos o "name" do "person2" e criamos a variavel "namePerson2" com o valor de "name"
const [ , { name: namePerson2 }] = friends;

//Nick
console.log(namePerson2);

const chart = [[2,6] , [4,8] , [1,5]];

//Acessa do terceiro elemento "[1,5]", o valor do segundo elemento "5", e jogo na variavel "y"
const [ , , [ , y]] = chart;

//5
console.log(y);
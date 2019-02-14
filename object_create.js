//object of Protos

const bookProtos = {
getSummar: function(){

	return `IN PRO ${this.title} was written by ${this.author} in the  year ${this.year}`;
},

getAge: function(){

	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}
};

//create object

const book1 = Object.create(bookProtos);
book1.title = 'Eat';
book1.author = 'Qasim';

console.log(book1);


const book2 = Object.create(bookProtos,{
title:{value: 'Book nww'},
author:{value: 'Farooq'},
year:{value: '2017'}



});

console.log(book2);


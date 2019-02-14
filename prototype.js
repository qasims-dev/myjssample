//Prototype
//Constructor
function Book(title,author,year)
{
	this.title = title;
	this.author = author;
	this.year = year;

	//this.getSummary = function(){
	//	return `${this.title} was written by ${this.author} in the  year ${this.year}`;
	//}

}

Book.prototype.getSummary = function(){

		return `IN PRO ${this.title} was written by ${this.author} in the  year ${this.year}`;
}

Book.prototype.getAge = function(){

	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}

Book.prototype.review = function(newYear){
	this.year = newYear;
	this.revised = true;
}

const book1 = new Book('Eating','John Doe','2013');
const book3 = new Book('Sleeping', 'Jane Doe','2016');

console.log(book1.getSummary());
console.log(book1.getAge());


console.log(book3.year);
book3.review('2018');
console.log(book3.year);
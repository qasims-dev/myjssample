//inheritence
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



function Magazine(title,author,year,month)
{
Book.call(this, title,author,year);
this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag','QA','2018','Jan');

Magazine.prototype.constructor = Magazine;
console.log(mag1.getSummary());

console.log(mag1);

console.log(mag1);

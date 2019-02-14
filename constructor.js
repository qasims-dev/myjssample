//Constructor
function Book(title,author,year)
{
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function(){
		return `${this.title} was written by ${this.author} in the  year ${this.year}`;
	}

}

const book1 = new Book('Eating','John Doe','2013');
const book3 = new Book('Sleeping', 'Jane Doe','2016');

console.log(book1);
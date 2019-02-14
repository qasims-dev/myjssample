//6_classes

class Book{

	constructor(title,author,year){
		this.title = title;
		this.author = author;
		this.year = year;

	}

	getSummary()
	{
		return `IN PRO ${this.title} was written by ${this.author} in the  year ${this.year}`;
	}

	static bestStore()
	{
		return 'Barnes and Noble';
	}
}

const book1 = new Book('Book1', 'Naseer', '2016');

console.log(book1);

console.log(book1.getSummary());
console.log(Book.bestStore());

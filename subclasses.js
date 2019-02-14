//subclasses

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


//

class Magazine extends Book{

	constructor(title,author,year,month){

		super(title,author,year);
		this.month = month;
	}
}


const mag1 = new Magazine('Mag','QA','2018','Jan');
console.log(mag1);

console.log(mag1.getSummary());

console.log(Book.bestStore());
//basic literals
const book1 = {
title:'Book one',
author:'John Doe',
year: '2013',
getSummary : function(){
	return `${this.title} was written by ${this.author} in the  year ${this.year}; 
}
};

console.log(book1.getSummary());

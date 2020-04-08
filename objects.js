// Blueprint for objects.
class Person {
	constructor ( name = "", age = 0, hobbies = [] )
	{
		this.name = name;
		this.age = age;
		this.hobbies = hobbies;
	}
	greeting ()
	{
		console.log("Hello, my name is " + this.name + "; I am " + this.age + "years old.");
	}
	addToHobbies ( hobby )
	{
		this.hobbies.push( hobby );
	}
}

const myFirstObj = new Person( 'John', 42, ['Netflix', 'Talking with Friends', 'Racing']);
console.log(myFirstObj);

myFirstObj.age = myFirstObj.age + 1;
console.log(myFirstObj);

myFirstObj.addToHobbies( 'Swimming' );
console.log(myFirstObj);
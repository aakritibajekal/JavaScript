// Rememeber from our dom.js file? We made a button and called it: myNewElement
// We can add an "Event Listener" to wait for a browser event to occur!
myNewElement.addEventListener( 'click', function ( event ){
	// inside event listeners, we get access to a special keyword : this
	// "this", inside of an event listener is actually the elenent the event is occuring on.
	// In this case it would be myNewElement, our button!
	this.style.backgroundColor = 'rgb( 200, 200, 200 )'; // Update inline style "background-color" to grey for clicked
} );

myNewElement.addEventListener( 'mouseover', function ( event ) { // When the mouse enters the element to hover
	this.style.color = 'salmon';
} );

myNewElement.addEventListener( 'mouseout', function ( event ) { // When the mouse leaves
	this.style.color = 'black';
} );

// Let;s start by grabbing our form
const myForm = document.querySelector( 'form' );
const myInput = document.querySelector( '[name="new-text"]' );
const myStrong = document.querySelector( 'form strong' );

myForm.addEventListener( 'submit', function ( e ) {
	// This prevents the default action! For a form submission, it is SUBMITTING the FORM DATA
	// In a case like a GET request, it is stopping the form from either:
	// A) Refreshing the current page with the updated URL parameters or
	// B) Stopping the browser from delivering you to a new page with the data included.
// Stops a element from doing a default action.
	e.preventDefault();

	//Retrieve the value from form field
const fieldValue = myInput.value;
console.log( fieldValue );

// Populate the text in <strong>
myStrong.textContent = fieldValue;

} );


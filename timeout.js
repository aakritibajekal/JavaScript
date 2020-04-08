/*
* Built-in JS function for delaying before running a function
* Takes 2 arguments:
*  a function (what we want to happen)
*  the amount of time to pass (in miliseconds)
*/
setTimeout( function() {
console.log( 'Script waited 5 seconds! ' );
}, 5000 ); //Each second is 1000 miliseconds, this will take 5 seconds.

// Let's try combining with an event..
const showMyAlert = () => alert( 'Hey! This was from a timeout!' );

// Let's add button for a delayed alert
document.body.innerHTML += `
<aside>
	Click this button to show an alert:
	<button id="timeout-alert">Click and wait 6 seconds!</button>
</aside>
`;

const timeoutButton = document.querySelector( '#timeout-alert' );

timeoutButton.addEventListener( 'click', event => {
	setTimeout( showMyAlert, 6000 ); //Function (by name), Time to pass(in miliseconds)
} );
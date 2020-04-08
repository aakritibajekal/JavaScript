/*
* Setinterval is similar to timeout, but is is reoccuring.
* It keeps running each time the passed in time value has passed
*
*
* still takes 2 arguments:
* 	a function
*	time inerval
*/

let numOfTicks = 0;
setInterval( function() {
	numOfTicks++; // numOfTicks +1; // Basic increment
	console.log( numOfTicks+': 10 second tick..' );
}, 10000 ); //Run the function every 10 seconds!

/*
* Make it stop, AAAHHH!
*/
let myTicks = 0;
//Since we named this, we can tell it, later, to stop!
let myInterval = setInterval( () => {
	myTicks = myTicks + 1;
	console.log( myTicks+' : 03 second tick...' );

	// One nice way of stopping the interval, is to...
	if (myTicks > 3 ) { // Check a condition!
		clearInterval( myInterval ); //Then say: STOP
	}
}, 3000 ); // Run the function every 3 seconds! 
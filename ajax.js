/*
* Asynchronous Javascript and XML
* most common today is transport via JSON
* We can make additional requests after page is loaded
* ES6 and newer standards make use of Fetch API - much easier than it used to be
*/

// //Using the fetch API.
// fetch( 'data/my-data.json' )

// 	.then( response => response.json() )
// 	.then( data => console.log( data ) );

// 	// Note we cannot pull from files in our local filesystem. Browsers have security to protect our files from websites.

fetch( 'http://api.open-notify.org/astros.json' )
	.then( response => { // This time lets check if there is an error. 200s are a success
		if (response.status >= 200 && response.status <= 299 )
		{ // 404 is file not found, 500 is a server error
			return response.json();
		}
		else
		{
			throw Error( response.statusText );
		}
	} )
	.then( data => {
	console.log( 'PEOPLE CURRENTLY IN OUTER SPACE: ' );
	for ( let person of data.people )
	console.log(person.name + ' is currently on the ' + person.craft + '.'); 
	} )
	.catch( error => console.log( error ) );
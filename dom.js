/**
*Selecting elements in our webpage.
*/
//The old fashioned way to target elements was always by ID.
const myParagraph = document.getElementById( 'my-paragraph' ); // We are grabbing the element in JS
console.log( myParagraph );

//Not too long after we 
const myLinks = document.getElementsByClassName( 'my-link' ); // Notice the word Elements; plural!
console.log( myLinks );

// Nowadays most people just use qaerySelector
const h1 = document.querySelector( 'h1' ); //Follows CSS selector syntax!
// We can select IDs via #my-id and classes via .my-class syntax.
console.log( h1 );

//If you DO need multiple elements elements via querySelector, we instead use querySelectorAll.
const aElements = document.querySelectorAll( 'a' ); // Every anchor on the page will be collected!
console.log( aElements );

//We can climb up or down the DOM tree, from existing selections.
const myBody = h1.parentNode; // We are climbing, and getting the PARENT element of h1!
console.log( myBody ); // Now we have the body!


// We can climb down the DOM tree and collect the children too!
const myParagraphChildren = myParagraph.childNodes; 
console.log( myParagraphChildren );

console.log( myParagraph.textContent ); //Manipulation - all the text inside the elements

myLinks[1].textContent = 'We Edited This Link\'s Text'; //Replaces the text in the second link

const secondParagraph = document.querySelector( 'body > p:nth-of-type(2)' ); //Get second paragraph..
secondParagraph.appendChild( myLinks[1] );

myLinks[1].classList.add('my-dynamic-class'); // You could also do .classList.remove('class-name')

//.innerHTML gets all HTML inside of our element
console.log( secondParagraph.innerHTML );
//Adds NEW HTML onto the end of what's INSIDE our element!
secondParagraph.innerHTML += `
<!-- We are CONCATENATING new HTML into this element. -->
<br>
<a href="#">
A new dynamic link in our dynamic
</a>
`;

// We can even access the whole element including its OWN open and closing tags!
console.log( secondParagraph.outerHTML );

// We can create elements, and prepare them BEFORE adding them into the live DOM.
const myNewElement = document.createElement( 'BUTTON' );
console.log( myNewElement ); // Just empty button element

// Let's add text..
myNewElement.textContent = 'Click Here!';
console.log(myNewElement); //Element is updated but still not showing in the browser

// Let's add a class
myNewElement.classList.add( 'my-button' );
console.log( myNewElement ); //Element updates: still not seen on browser

// Let's move it to our second paragraph...
secondParagraph.appendChild( myNewElement ); // This will now be added to oyr paragraph

// Let's remove the first link myParagraph
myParagraph.removeChild( myLinks[0] ); //Deletes the first link from myParagraph.
// Note an element can't delete itself.. we need to go to the parent, and tell it which element needs to be deleted
// In this example, we happened to have the parent! Sometimes we don't - alternatively we could have done:
// myLinks[0].parentNode.removeChild( myLinks[0] );







































































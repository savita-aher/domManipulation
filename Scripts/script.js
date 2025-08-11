//Part 1 : Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

/*Part 2 : Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.*/
mainEl.style.backgroundColor='var(--main-bg)';

//Part 3 :Set the content of mainEl to <h1>DOM Manipulation</h1>. 
// There are a variety of ways to do this; 
// pick whichever one that you think works best in this situation.
mainEl.innerHTML= "<h1>DOM Manipulation</h1>";

//Part 4 : Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
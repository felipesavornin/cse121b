/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Felipe Savornin';
const currentYear = 2024;
const profilePicture = 'images/felipe-profile.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let foods = ['steak', 'pasta', 'pizza', 'hamburguers', 'sushi'];
foodElement.innerHTML += `<br><span style="font-weight: bold; text-transform: capitalize;">${foods}</span>`;

foods.push('chivito');
foodElement.innerHTML += `<br><span style="font-weight: bold; text-transform: capitalize;">${foods}</span>`;

foods.shift();
foodElement.innerHTML += `<br><span style="font-weight: bold; text-transform: capitalize;">${foods}</span>`;

foods.pop();
foodElement.innerHTML += `<br><span style="font-weight: bold; text-transform: capitalize;">${foods}</span>`;






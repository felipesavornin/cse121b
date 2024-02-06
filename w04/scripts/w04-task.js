/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Felipe Savornin',
    photo: './images/felipe-profile.png',
    favoriteFoods: [
        'steak', 
        'pasta', 
        'pizza', 
        'hamburguers', 
        'sushi'
    ],
    hobbies: [
        'play soccer',
        'go to the movies'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Montevideo, Uruguay',
        length: '12 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Neuquen, Argentina',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Paysandu, Uruguay',
        length: '19 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
        let li = document.createElement('li');
        li.textContent = hobbie;
        document.querySelector('#hobbies').appendChild(li);
    }
);

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
        let dt = document.createElement('dt');
        dt.textContent = place.place;

        let dd = document.createElement('dd');
        dd.textContent = place.length;

        document.querySelector('#places-lived').appendChild(dt);
        document.querySelector('#places-lived').appendChild(dd);        
    }
);


/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(element => {

        let card = document.createElement('article');

        let name = document.createElement('h3');
        name.innerHTML = element.templeName;
        card.appendChild(name);

        let img = document.createElement('img');
        img.src = element.imageUrl;
        img.alt = element.location;
        card.appendChild(img);

        templesElement.appendChild(card);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = function(temples){
    reset();
    let filter = document.getElementById('filtered').value;
    let newTempleArray = [];

    switch(filter) {
        case 'utah':
            newTempleArray = temples.filter(filTemp);
            function filTemp(i){                
                if(i.location.includes('Utah')){
                    return i;
                }
            }
            displayTemples(newTempleArray);
        break;

        case 'notutah':
            newTempleArray = temples.filter(filNoUtah);
            function filNoUtah(i){             
                if(!i.location.includes('Utah')){
                    return i;
                }
            }
            displayTemples(newTempleArray);
        break;

        case 'older':
            newTempleArray = temples.filter(filOld);
            function filOld(i){       
                if(Date.parse(i.dedicated) < new Date(1950, 0, 1)){
                    return i;
                }
            }
            displayTemples(newTempleArray);
        break;

        case 'all':
            displayTemples(temples);
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
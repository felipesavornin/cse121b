let mainPokeList = [];
const listArea = document.getElementById('poke-list');
const resultsCount = document.getElementById('search-results');
const alphabetList = document.getElementById('alphabet-filter');

/* Function to Get Data */
const getPokemons = async () => {
    const response = await fetch("./data/pokemon.json");

    if (response.ok) {
        mainPokeList = await response.json();
        //console.log(mainPokeList);
        //createNamesList(mainPokeList);
    }
};


/* Filter by Name */
const filterByName = (filtName, filType) => {
    let newTempArray = mainPokeList.filter(filTemp);
    function filTemp(i){                

        switch(filType){
            case 'search':
                if(i.name.toLowerCase().includes(filtName.toLowerCase())){
                    return i;
                }
            break;

            case 'letter':
                if(i.name.includes(filtName)){
                    return i;
                }
            break;
        }
        
    }
    //console.log(newTempArray);
    displayList(newTempArray);
};

/* Reset List */
const reset = () => {
    listArea.innerHTML = '';
    resultsCount.innerHTML = '';
}

/* Display Pokemon List */
const displayList = (list) => {
    reset();

    let countBox = document.createElement('p');
    countBox.innerHTML = `<strong>Results: </strong>${list.length}`;
    resultsCount.appendChild(countBox);

    list.forEach(element => {
        let card = document.createElement('details');

        let name = document.createElement('summary');
        name.innerHTML = element.name;
        card.appendChild(name);

        let image = document.createElement('img');
        image.src = `${element.variations[0].image}`;
        image.alt = element.name;
        card.appendChild(image);        

        let info = document.createElement('aside');
        info.style = 'width: 45%;';
        info.innerHTML = `<p><strong style="color: red;">${element.variations[0].specie}</strong></p>`;
        info.innerHTML += `<p><strong>Evolutions: </strong><span style="text-transform: capitalize;">${element.variations[0].evolutions}</span></p>`;
        info.innerHTML += `<p><strong>Stats: </strong><br>`;
        info.innerHTML += `HP: ${element.variations[0].stats.hp}<br>`;
        info.innerHTML += `Attack: ${element.variations[0].stats.attack}<br>`;
        info.innerHTML += `Defense: ${element.variations[0].stats.defense}<br>`;
        info.innerHTML += `Speed: ${element.variations[0].stats.speed}</p>`;
        info.innerHTML += `<a href="${element.link}" class="button" target="_blank">View Detailed Info</a>`;
        card.appendChild(info);

        let desc = document.createElement('p');
        desc.innerHTML = `<p>${element.variations[0].description}</p>`;
        card.appendChild(desc);

        listArea.appendChild(card);
    });
};

/* Alphabet Filter links */
const alphabetFilter = () => {
    let i= 65;
    let links = '';
    
    while (i <= 90) {
        links += `<a onclick="filterByName('${String.fromCharCode(i)}', 'letter')">${String.fromCharCode(i)}</a> `;
        i++;
    }
    alphabetList.innerHTML = links;
}

getPokemons();
alphabetFilter();

/* Filter input */
document.querySelector("#poke_name").addEventListener("keyup", () => { filterByName(document.getElementById('poke_name').value, 'search') });
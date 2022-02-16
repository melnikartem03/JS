

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
.then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )

    .then((beers) => {
         render(beers);
        // что-то делаем с данными
    })

    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });


let listOfBeer = document.getElementById("listOfBeer");
let card = document.getElementById("card");

listOfBeer.innerHTML = "";

function render(beers){
    beers.map((beer) => {

        let newBeers = document.createElement("div");
        newBeers.classList.add("card")

            let name = card.getElementsByClassName("name");
            name[0].textContent = beer.name;

            let tagline = card.getElementsByClassName("tagline");
            tagline[0].textContent = beer.tagline;

            let imageUrl = card.getElementsByClassName("image");
            imageUrl[0].src = beer.image_url;
           
            let description = card.getElementsByClassName("description");
            description[0].textContent = beer.description;


        newBeers.innerHTML = card.innerHTML;
        listOfBeer.appendChild(newBeers);
    });
};
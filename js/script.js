const API_URL = "https://rickandmortyapi.com/api/character/";

fetch(API_URL)
    .then(response => response.json())
    .then(json => renderHtml(json))
    .catch(error => {
        console.log(error);
    });

function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

function renderHtml(json) {
    const data = json.results;

    const containerDiv = document.querySelector(".results");

    data.forEach((card, index) => {
        const cardType = card.type || "Unkown"

        const cardComponent = `
                <div id="${index}" class="animated rotateInUpRight col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img class="image animated rotateInUpLeft" src="${card.image}" alt="${card.name}">
                        <div class="details">
                            <h4 class="name">${card.name}</h4>
                            <p>Type: ${cardType}</p>
                            <p>Episode count: ${card.episode.length}</p>
                            <a href="/details.html?id=${card.id}" class="btn btn-primary" >Details</a>
                        </div>
                    </div>
                </div>
        `;
        
        containerDiv.innerHTML += cardComponent;
    });

    hideLoader();
}
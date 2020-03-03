const API_URL = "https://rickandmortyapi.com/api/character/";

fetch(API_URL)
    .then(response => response.json())
    .then(json => renderHtml(json))
    .then(error => {
        console.log(error);
    });

function renderHtml(json) {
    const data = json.results;
    const containerDiv = document.querySelector(".results");

    /*for (let i = 0; i < data.length; i++) {
        const cardType = data[i].type === "" || data[i].type === undefined
                ? data[i].type = "Unknown"
                : data[i].type;

        const renderCard = `
                <div class="animated rotateInUpRight col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img class="image" src="${data[i].image}" alt="${data[i].name}">
                        <div class="details">
                            <h4 class="name">${data[i].name}</h4>
                            <p>Type: ${cardType}</p>
                            <p>Episode count: ${data[i].episode.length}</p>
                            <a class="btn btn-primary" href="details.html?id=${data[i].id}">Details</a>
                        </div>
                    </div>
                </div>
                `;
        containerDiv.innerHTML += renderCard;
    }*/
    data.forEach((card, index) => {
        const cardType = card.type === "" || card.type === undefined
            ? card.type = "Unknown"
            : card.type;

        const cardComponent = `
                <div id="${index}" class="animated rotateInUpRight col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img class="image" src="${card.image}" alt="${card.name}">
                        <div class="details">
                            <h4 class="name">${card.name}</h4>
                            <p>Type: ${cardType}</p>
                            <p>Episode count: ${card.episode.length}</p>
                            <a class="btn btn-primary" href="details.html?id=${card.id}">Details</a>
                        </div>
                    </div>
                </div>
        `;
        containerDiv.innerHTML += cardComponent;
    });

    hideLoader();
}

function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}
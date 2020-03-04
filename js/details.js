const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;
if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const BASE_URL = `https://rickandmortyapi.com/api/character/`;
const API_URL = `${BASE_URL}${id}`;

fetch(API_URL)
    .then(response => response.json())
    .then(json => renderHtml(json))
    .catch(error => console.log(error));

function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

function renderHtml(json) {
    const data = json;
    const containerDiv = document.querySelector(".detail-container");
    containerDiv.innerHTML = `
        <img class="details-image animated fadeInUp" src="${data.image}" alt="${data.name}" />
        <div class="detail-details  animated fadeInRight">
            <h1>${data.name}</h1>
            <p>Status: <span class="value" id="status">${data.status}</span></p>
            <p>Species: <span class="value" id="species">${data.species}</span></p>
            <p>Origin: <span class="value" id="origin">${data.origin.name}</span></p>
            <p>Location: <span class="value" id="location">${data.location.name}</span></p>
        </div>
        `;
    hideLoader();
}
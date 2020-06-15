import Api from './api.js';

/**DOM */
let card = document.querySelector('#card');
/**instance of class api */
let api = new Api();
let ID_CHARACTER = -1;
async function initApp() {
	if (ID_CHARACTER == -1) {
		ID_CHARACTER = +(Math.random() * 591).toFixed(0);
	}
	let dataApi = await api.getCharacters(ID_CHARACTER);
	renderCharacter(dataApi);
}

document.addEventListener('click', (e) => {
	let left = e.target.classList.contains('left');
	let right = e.target.classList.contains('right');
	if (left && ID_CHARACTER > 1) {
		ID_CHARACTER--;
	} else if (right && ID_CHARACTER < 591) {
		ID_CHARACTER++;
	}
	initApp();
	// console.log(ID_CHARACTER);
});

function renderCharacter(data) {
	let htmlContent = `
	<div class="principal">
		<h1 id="name">${data.name}</h1>
		<img id="img" src="${data.image}" alt="${data.name}">
	</div>
	<div class="attributes">
		<p id="status"> Status: <span>${data.status}</span></p>
		<p id="specie"> Specie: <span>${data.species}</span></p>
		<p id="gender"> Gender: <span>${data.gender}</span></p>
		<p id="location"> Location: <span>${data.location.name}</span></p>
		<small id="id"> API Id: ${ID_CHARACTER}</small>
	</div>
	<div class="arrows-container">
		<i class="fas fa-chevron-left arrow left" ></i>
		<i class="fas fa-chevron-right arrow right"></i>
	</div>
    `;
	card.innerHTML = htmlContent;
}

initApp();

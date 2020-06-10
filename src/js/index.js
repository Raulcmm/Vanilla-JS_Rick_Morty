import Api from './api.js';

/**DOM */
let card = document.querySelector('#card');

/**instance of class api */
let api = new Api();

async function initApp() {
	let entero = +(Math.random() * 20).toFixed(0);
	if (entero > 0 && entero < 20) {
		let dataApi = await api.getCharacters(entero);
		console.log(dataApi);
		renderCharacter(dataApi);
	}
	setTimeout(() => {
		initApp();
	}, 5000);
}

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
	</div>

    `;
	card.innerHTML = htmlContent;
}

initApp();

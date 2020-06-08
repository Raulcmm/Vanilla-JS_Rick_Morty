import Api from './api.js';

/**DOM */
let container = document.querySelector('#content');

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
	}, 1000);
}

function renderCharacter(data) {
	let htmlContent = `
    <h1 id="name">${data.name}</h1>
    <img id="img" src="${data.image}" alt="${data.name}">
    <p id="specie">${data.species}</p>
    <p id="status">${data.status}</p>
    `;
	container.innerHTML = htmlContent;
}

initApp();

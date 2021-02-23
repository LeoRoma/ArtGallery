let paintings = []


fetch("https://openaccess-api.clevelandart.org/api/artworks/", {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	}
})
	.then(
		function (response) {
			if (response.status !== 200) {
				console.log(`Looks like there was some problem. Status Code: ${response.status}`);
				return;
			}
			response.json()
				.then(function (response) {
					console.log(response.data[0].images.web.url);
					getArts(response.data)
				})
		}
	)
	.catch(function (error) {
		console.log(`Fetch Error :-S ${error}`);
	})


function getArts(arts){
	let filteredArts = arts.filter((art) => {
		return art.collection.includes('Painting') && art.collection.includes('Euro');
	})
	displayPaintings(filteredArts);
}

function displayPaintings(paintings){
	const cardsHolder = document.querySelector('.cards-holder');
	if(paintings){
		const htmlString = paintings.map((painting) => {
			// console.log(painting.images.print)
			return `
				<div>${painting.creditline}</div>
	
			`
		}).join(' ');
		console.log(cardsHolder)
		cardsHolder.innerHTML = htmlString;
	}
	
}

{/* <img src="${painting.images.web.url}" alt="painting"></img> */}
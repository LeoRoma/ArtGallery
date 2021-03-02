const paintingsFromEurope = {
	Austria: "",
	England: "",
	France: "",
	Germany: "",
	Italy: "",
	Netherlands: "",
	Switzerland: ""
} 

fetch("https://openaccess-api.clevelandart.org/api/artworks/", {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	'Access-Control-Allow-Origin': '*',
	origin: "https://leoartgallery.netlify.app"
})
	.then(
		function (response) {
			if (response.status !== 200) {
				console.log(`Looks like there was some problem. Status Code: ${response.status}`);
				return;
			}
			response.json()
				.then(function (response) {
					getPaintings(response.data)
				})
		}
	)
	.catch(function (error) {
		console.log(`Fetch Error :-S ${error}`);
	})




function getPaintings(arts) {
	let filteredArts = arts.filter(filterPaintingsByEuro);
	getEachCountryPainting(filteredArts)
}

function filterPaintingsByEuro(art){
	return art.collection.includes('Painting') && art.collection.includes('Euro');
}

function getEachCountryPainting(filteredArts){
	const filteredPaintings = [...filteredArts];
	for(let i = 0; i < filteredPaintings.length; i++){
		const painting = filteredPaintings[i];
		const culture = painting.culture[0].split(',')
		const country = culture[0]
		if(painting.images !== null){
			if(country === "Austria"){
				paintingsFromEurope.Austria = painting
			}
			if(country === "England"){
				paintingsFromEurope.England = painting;
			}
			if(country === "France"){
				paintingsFromEurope.France = painting;
			}
			if(country === "Germany"){
				paintingsFromEurope.Germany = painting
			}
			if(country === "Italy"){
				paintingsFromEurope.Italy = painting;
			}
			if(country === "Netherlands"){
				paintingsFromEurope.Netherlands = painting;
			}
			// if(country === "Sweden"){
			// 	paintingsFromEurope.Sweden = painting
			// }
			if(country === "Switzerland"){
				paintingsFromEurope.Switzerland = painting
			}
		}
	
	}
	displayPaintings()
}

function displayPaintings() {
	const galleryListContainer = document.querySelector('.gallery-list-container');
	const htmlPaintings = Object.keys(paintingsFromEurope).map(function(key){
		const painting = paintingsFromEurope[key];
		return `
			<div class="painting-container">
				<div class="painting-image-container">
					<img src="${painting.images.web.url}" alt="painting"></img> 
					<div class="painting-title">
						${painting.title}
					</div>
					<div class="painting-title">
						${painting.culture}
					</div>
				</div>
			
			</div>
		
		`
	}).join(" ");
	galleryListContainer.innerHTML = htmlPaintings;
}

const paintingsFromEurope = {
	Austria: "",
	England: "",
	France: "",
	Germany: "",
	Italy: "",
	Netherlands: "",
	Sweden: "",
	Switzerland: ""
} 

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
			if(country === "Sweden"){
				paintingsFromEurope.Sweden = painting
			}
			if(country === "Switzerland"){
				paintingsFromEurope.Switzerland = painting
			}
		}
	
	}
	console.log(paintingsFromEurope)
	displayPaintings()
}

function displayPaintings() {
	const galleryListContainer = document.querySelector('.gallery-list-container');
	const htmlPaintings = Object.keys(paintingsFromEurope).map(function(key, index){
		console.log(paintingsFromEurope[key].images.web.url)
		return `
		<img src="${paintingsFromEurope[key].images.web.url}" alt="painting"></img> 
			<div>${paintingsFromEurope[key].title}</div>
			<div>${paintingsFromEurope[key].culture}</div>
		
		`
	}).join(" ");
	galleryListContainer.innerHTML = htmlPaintings;
}


function displayPaintings() {
	const paintingsCopy = [...paintingsData];
	const galleryListContainer = document.querySelector('.gallery-list-container');

	const htmlPaintings = paintingsCopy.map((painting) => {
		return `
			<div class="painting-container">
				<div class="painting-image-container">
					<img src="${painting.image}" alt="painting"></img> 
					<div class="painting-title">
						${painting.artist}
					</div>
					<div class="painting-title">
						${painting.title}
					</div>
				</div>
			
			</div>
		
		`
	}).join(" ");
	galleryListContainer.innerHTML = htmlPaintings;
}
displayPaintings()


fetch("https://openaccess-api.clevelandart.org/api/artworks/", {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'https://leoartgallery.netlify.app'
	},
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
	console.log(filteredArts)
}

function filterPaintingsByEuro(art){
	return art.collection.includes('Painting') && art.collection.includes('Euro') && art.tombstone.includes('Vincent');
}
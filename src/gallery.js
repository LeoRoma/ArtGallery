
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


const paintingsFromEurope = {
	Austria: {artist: "Ferdinand Georg Waldmüller (Austrian, 1793-1865)", culture: "Austria, 19th century", image: "https://openaccess-cdn.clevelandart.org/1988.57/1988.57_web.jpg", title: "Countess Szécheny"},
	England: {artist: "Henry Bone (British, 1755-1834), after Titian (Italian, c. 1488-1576)", culture: "England, 19th century", image: "https://openaccess-cdn.clevelandart.org/2013.51/2013.51_web.jpg", title: "Bacchus and Ariadne"},
	France: {artist: "Henri Rousseau (French, 1844-1910)", culture: "France, late 19th Century-early 20th Century", image: "https://openaccess-cdn.clevelandart.org/1929.951/1929.951_web.jpg", title: "Outskirts of Paris"},
	Germany: {artist: "Franz Ludwig Catel (German, 1778-1856)", culture: "Germany, 19th century", image: "https://openaccess-cdn.clevelandart.org/1994.198/1994.198_web.jpg", title: "A View of Naples through a Window"},
	Italy: {artist: "Giovanni Segantini (Italian, 1858-1899)", culture: "Italy, 19th century", image: "https://openaccess-cdn.clevelandart.org/1982.124/1982.124_web.jpg", title: "Pine Tree"},
	Netherlands: {artist: "Two Poplars in the Alpilles near Saint-Rémy", culture: "Netherlands, 19th century", image: "https://openaccess-cdn.clevelandart.org/1958.32/1958.32_web.jpg", title: "Two Poplars in the Alpilles near Saint-Rémy"},
	Switzerland: {artist: "Arnold Böcklin (Swiss, 1827-1901)", culture: "Switzerland, 19th century", image: "https://openaccess-cdn.clevelandart.org/1979.57/1979.57_web.jpg", title: "Ruin by the Sea"}
} 

function displayPaintings() {
	const galleryListContainer = document.querySelector('.gallery-list-container');
	const htmlPaintings = Object.keys(paintingsFromEurope).map(function(key){
		const painting = paintingsFromEurope[key];
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
					<div class="painting-title">
						${painting.culture}
					</div>
				</div>
			
			</div>
		
		`
	}).join(" ");
	galleryListContainer.innerHTML = htmlPaintings;
}

displayPaintings()
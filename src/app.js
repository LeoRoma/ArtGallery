const arts = []
const copiedArts = [...arts];

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
					console.log(response);
					arts.push(response.data);
					getArts(response.data)
				})
		}
	)
	.catch(function (error) {
		console.log(`Fetch Error :-S ${error}`);
	})


function getArts(arts){
	console.log(arts[0])
	let filteredArts = arts.filter((art) => {
		return art.collection.includes('Painting');
	})
	console.log(filteredArts)
}
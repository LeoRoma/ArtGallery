fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd') 
  .then(
    function(response){
      if(response.status !== 200){
        console.log(`Looks like there was some problem. Status Code: ${response.status}`);
        return;
      }
      response.json()
        .then(function(data) {
            getArts(data.results);
        //   items.push(data.results);
        })
    }
  )
  .catch(function(error){
    console.log(`Fetch Error :-S ${error}`);
  })

  function getArts(arts){
    const filteredArts = arts.filter((art) => {
        return art.section === "arts"
    })
    console.log(filteredArts);
    displayArts(filteredArts)
  }

  function displayArts(arts){
    const cardsHolder = document.querySelector('.cards-holder');

      const htmlString = arts.map((art) => {
        //   console.log(art.multimedia[4])
          return `
            <div>${art.title}</div>
            <img src="${art.multimedia[4].url}" alt="art" />
          `
      }).join(' ');

      cardsHolder.innerHTML = htmlString;
  }

//   
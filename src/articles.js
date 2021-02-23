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
    const articlesHolder = document.querySelector('.articles-holder');

      const htmlString = arts.map((art) => {
        //   console.log(art.multimedia[4])
          return `
            <div class="article-container">
                <div class="article-image-container">
                    <img src="${art.multimedia[0].url}" alt="art" />
                </div>
                <div class="article-body-container">
                    <div class="article-title">
                        <h1>${art.title}</h1>
                    </div>
                    <div class="article-date">
                        ${formatDate(art.created_date)}
                    </div>
                </div>
                
            </div>
          `
      }).join(' ');

      articlesHolder.innerHTML = htmlString;
  }

  function formatDate(date){
      let year = date.slice(0,4);
      let month = date.slice(5,7);
      let day = date.slice(8, 10);
      let formattedDate = `${day}/${month}/${year}`;
      return formattedDate
  }

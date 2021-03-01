fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log(`Looks like there was some problem. Status Code: ${response.status}`);
        return;
      }
      response.json()
        .then(function (data) {
          getArts(data.results);
        })
    }
  )
  .catch(function (error) {
    console.log(`Fetch Error :-S ${error}`);
  })

function getArts(arts) {
  const filteredArts = arts.filter((art) => {
    return art.section === "arts"
  })
  displayArts(filteredArts)
  getArt(filteredArts[0]);
}

function displayArts(arts) {
  const articlesHolder = document.querySelector('.articles-holder');

  const htmlString = arts.slice(1, -1).map((art) => {
    return `
            <div class="article-container">
                <div class="article-image-container">
                    <a href="${art.url}"><img src="${art.multimedia[0].url}" alt="art" /></a>
                </div>
                <div class="article-body-container">
                  <div class="article-body-wrapper">
                      ${art.byline}
                    <div class="article-title two-lines">
                      <a href="${art.url}"><h1>${art.title}</h1></a>
                    </div>
                    <div class="article-date">
                        ${formatDate(art.created_date)}
                    </div>
                  </div>
                </div>
                
            </div>
          `
  }).join(' ');

  articlesHolder.innerHTML = htmlString;
}


function getArt(art) {
  const formattedDate = formatDate(art.created_date);
  const title = art.title;
  const image = art.multimedia[0].url;
  const byline = art.byline;
  const url = art.url
  populatePosterImage(formattedDate, title, byline, image, url);
}

function populatePosterImage(formattedDate, title, byline, image, url) {
  const htmlPosterImage = `    
      <a href="${url}"><img src="${image}" alt="latest-news"></a>

      <div class="poster-image-body-container">
          <div class="poster-image-body-wrapper">
    
              <div class="poster-image-title two-lines">
           
                  <a href="${url}"><h1 class="poster-fontcolor">${title}</h1></a>
              </div>
              <div class="poster-image-date poster-fontcolor">
                  ${formattedDate} -  ${byline}
              </div>
          </div>
      </div>
    `
  const posterImage = document.querySelector('.poster-image');
  posterImage.innerHTML = htmlPosterImage;
}

function formatDate(date) {
  const monthNames = { '01': "January", '02': "February", '03': "March", '04': "April", '05': "May", '06': "June", '07': "July", '08': "August", '09': "September", '10': "October", '11': "November", '12': "December" };

  let year = date.slice(0, 4);
  let month = monthNames[date.slice(5, 7)];
  let day = date.slice(8, 10);

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate
}

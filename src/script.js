// const clientId = '0d42ad7837447394a047';
// const clientSecret = '2d7cf34de0374bdaad6a018c6df1c080';

// const data = {
//     client_id: clientId,
//     client_secret: clientSecret
// }

// fetch('https://api.artsy.net/api/tokens/xapp_token', {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers:{
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(json => {
//     console.log(json.token);
//     sessionStorage.setItem('token', json.token );
//     // token = json.token;
// })
// .catch(error => console.log(error));

// fetch('https://api.artsy.net/api/artworks', {
//     method: 'GET',
//     headers:{
//         'Content-Type': 'application/json',
//         'X-Xapp-Token': sessionStorage.getItem('token')
//     }
// })
// .then(
//     function(response){
//       if(response.status !== 200){
//         console.log(`Looks like there was some problem. Status Code: ${response.status}`);
//         return;
//       }
//       response.json()
//         .then(function(data) {
//             console.log(data)
//         })
//     }
//   )
//   .catch(function(error){
//     console.log(`Fetch Error :-S ${error}`);
//   })

const body = document.body;
let scrollTop = document.documentElement;
const landingPageContainer = document.querySelector('.landing-page-container');
const landingPageContainerHeight = landingPageContainer.scrollHeight;
console.log(landingPageContainerHeight)

document.addEventListener('scroll', () => {
    landingPageContainer.style.display = scrollTop.scrollTop >= landingPageContainerHeight ? 'none' : 'block';
})

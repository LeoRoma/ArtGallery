const body = document.body;
let scrollTop = document.documentElement;
const landingPageContainer = document.querySelector('.start-screen');
let landingPageContainerHeight = landingPageContainer.scrollHeight;
const rightSidenavHeader = document.querySelector('.right-sidenav-header');
let rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;
console.log(rightSidenavHeaderWidth);
const drawer = document.querySelector('.drawer');
let drawerWidth = drawer.offsetWidth;

// body.addEventListener('onresize', () => {
//     landingPageContainerHeight = landingPageContainer.scrollHeight;
//     rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;
// })

document.addEventListener('scroll', () => {
    rightSidenavHeader.style.right = scrollTop.scrollTop >= 1 ? `-${rightSidenavHeaderWidth}px` : '0px';
    drawer.style.right = scrollTop.scrollTop >= 1 ? '0px' : `-100px`;
    landingPageContainer.style.display = scrollTop.scrollTop >= landingPageContainerHeight ? 'none' : 'block';
    console.log(typeof scrollTop.scrollTop)
})


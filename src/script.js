const body = document.body;
let scrollTop = document.documentElement;
const landingPageContainer = document.querySelector('.start-screen');
let landingPageContainerHeight = landingPageContainer.offsetHeight;
const rightSidenavHeader = document.querySelector('.right-sidenav-header');
let rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;
console.log(rightSidenavHeaderWidth);
const drawerButton = document.querySelector('.drawer-button');
const rightSideNavInner = document.querySelector('.right-sidenav-inner')
// let drawerWidth = drawer.offsetWidth;

// body.addEventListener('onresize', () => {
//     landingPageContainerHeight = landingPageContainer.scrollHeight;
//     rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;
// })

window.addEventListener('scroll', () => {
    rightSidenavHeader.style.right = scrollTop.scrollTop >= 1 ? `-${rightSidenavHeaderWidth}px` : '0px';
    drawerButton.style.right = scrollTop.scrollTop >= 1 ? '-15px' : `-150px`;
    // landingPageContainer.style.display = scrollTop.scrollTop >= landingPageContainerHeight ? 'none' : 'block';
    // let currentScroll = window.pageYOffset || scrollTop.scrollTop ||
    //     body.scrollTop || 0;

    landingPageContainer.style.opacity = -scrollTop.scrollTop / (landingPageContainerHeight) + 1
})


drawerButton.addEventListener('click', () => {
    rightSideNavInner.classList.toggle('open');
    drawerButton.classList.toggle('change');
})



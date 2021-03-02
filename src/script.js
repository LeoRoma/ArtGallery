const body = document.body;
let scrollTop = document.documentElement;
const landingPageContainer = document.querySelector('.start-screen');
let landingPageContainerHeight = landingPageContainer.offsetHeight;
const rightSidenavHeader = document.querySelector('.right-sidenav-header');
let rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;

const drawerButton = document.querySelector('.drawer-button');
const rightSideNavInner = document.querySelector('.right-sidenav-inner');
const rightSidenavWrapper = document.querySelector('.right-sidenav-wrapper');
const sidenavImageContainer = document.querySelector('.sidenav-image-container');

window.addEventListener('scroll', () => {
    rightSidenavHeader.style.right = scrollTop.scrollTop >= 1 ? `-${rightSidenavHeaderWidth}px` : '0px';
    drawerButton.style.right = scrollTop.scrollTop >= 1 ? '15px' : `-150px`;
    landingPageContainer.style.opacity = -scrollTop.scrollTop / (landingPageContainerHeight) + 1
})


drawerButton.addEventListener('click', () => {
    rightSideNavInner.classList.toggle('open-menu');
    sidenavImageContainer.classList.toggle('open-image')
    drawerButton.classList.toggle('change');
    rightSidenavWrapper.classList.toggle('circle'); 
    sidenavImageContainer.classList.toggle('circle')
})




const body = document.body;
let scrollTop = document.documentElement;
const landingPageContainer = document.querySelector('.start-screen');
let landingPageContainerHeight = landingPageContainer.offsetHeight;

const rightSidenavHeader = document.querySelector('.right-sidenav-header');
let rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;

const secondHeaderContainer = document.querySelector('.second-header-container');
let secondHeaderContainerHeight = secondHeaderContainer.offsetHeight;

let articlesHolderHeight;

window.onload = function() {
    const articlesHolder = document.querySelector('.articles-holder');
    articlesHolderHeight = articlesHolder.offsetHeight;
    // console.log(stickyDynamicContainerHeight)
};

// Resize
window.addEventListener('resize', () => {
    setCurrentHeight()
})

function setCurrentHeight(){
    landingPageContainerHeight = landingPageContainer.offsetHeight;
    secondHeaderContainerHeight = secondHeaderContainer.offsetHeight;
}

// Scroll

window.addEventListener('scroll', () => {
    rightSidenavHeader.style.right = scrollTop.scrollTop >= 1 ? `-${rightSidenavHeaderWidth}px` : '0px';
    drawerButton.style.right = scrollTop.scrollTop >= 1 ? '15px' : `-150px`;
    landingPageContainer.style.opacity = -scrollTop.scrollTop / (landingPageContainerHeight) + 1;
    fadeSecondHeaderOpacity()
    // console.log(-scrollTop.scrollTop)
})

function fadeSecondHeaderOpacity(){
    if(scrollTop.scrollTop >= (articlesHolderHeight + landingPageContainerHeight)){
        // console.log(-scrollTop.scrollTop / (secondHeaderContainerHeight) + 0.5, " second header")
        secondHeaderContainer.style.opacity = -scrollTop.scrollTop / (secondHeaderContainerHeight) + 10
    }
    if(scrollTop.scrollTop >= (articlesHolderHeight + landingPageContainerHeight + secondHeaderContainerHeight)){
        secondHeaderContainer.style.opacity = 0.5
    }
}


//SideNavBar
const drawerButton = document.querySelector('.drawer-button');
const rightSideNavInner = document.querySelector('.right-sidenav-inner');
const rightSidenavWrapper = document.querySelector('.right-sidenav-wrapper');
const sidenavImageContainer = document.querySelector('.sidenav-image-container');

drawerButton.addEventListener('click', () => {
    rightSideNavInner.classList.toggle('open-menu');
    sidenavImageContainer.classList.toggle('open-image')
    drawerButton.classList.toggle('change');
    rightSidenavWrapper.classList.toggle('circle'); 
    sidenavImageContainer.classList.toggle('circle')
})




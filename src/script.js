const body = document.body;
let scrollTop = document.documentElement;

// Landing Page
const landingPageContainer = document.querySelector('.start-screen');
let landingPageContainerHeight = landingPageContainer.offsetHeight;

const rightSidenavHeader = document.querySelector('.right-sidenav-header');
let rightSidenavHeaderWidth = rightSidenavHeader.offsetWidth;

const secondHeaderContainer = document.querySelector('.second-header-container');
let secondHeaderContainerHeight = secondHeaderContainer.offsetHeight;

// Latest News
let articlesHolderHeight;

// Gallery 

const paintingImage = document.querySelector('.gallery-list-container').querySelectorAll('.painting-image-container img');

let paintingImageHeight = paintingImage.offsetHeight;

// Resize

window.onload = function () {
    const articlesHolder = document.querySelector('.sticky-dynamic-container');
    articlesHolderHeight = articlesHolder.offsetHeight;

    

    window.addEventListener('resize', () => {
        articlesHolderHeight = articlesHolder.offsetHeight;
        setCurrentHeight()
        setPaintingImageHeight()
    })  
    setPaintingImageHeight()
};

function setCurrentHeight() {
    landingPageContainerHeight = landingPageContainer.offsetHeight;
    secondHeaderContainerHeight = secondHeaderContainer.offsetHeight;
}

function setPaintingImageHeight(){
    for(let i = 0; i < paintingImage.length; i++){
        const painting = paintingImage[i]
        let paintingImageHeight = painting.offsetHeight;
        if(body.offsetWidth >= 1439){
            paintingImageHeight = body.offsetWidth / 2;
        }else if(body.offsetWidth >= 1200){
            paintingImageHeight = body.offsetWidth / 3;
        }else if(body.offsetWidth >= 1022){
            console.log("1022")
            paintingImageHeight = body.offsetWidth / 4;
        }
        else{
            paintingImageHeight = body.offsetWidth / 4;
        }
        console.log(body.offsetWidth)
        console.log(paintingImageHeight)
        painting.style.height = `${paintingImageHeight}px`;
    }
  
    // paintingImageContainerImage.style.height = `${paintingImageContainerImageHeight}px`;
}

setPaintingImageHeight()

// Scroll

window.addEventListener('scroll', () => {
    hideShowSidenavHeader()
    hideShowDrawerButton()
    fadeOutLandingPageContainer()
    fadeSecondHeaderOpacity()
})

function hideShowSidenavHeader(){
    rightSidenavHeader.style.right = scrollTop.scrollTop >= 1 ? `-${rightSidenavHeaderWidth}px` : '0px';
}

function hideShowDrawerButton(){
    drawerButton.style.right = scrollTop.scrollTop >= 1 ? '15px' : `-150px`;
}

function fadeOutLandingPageContainer(){
    landingPageContainer.style.opacity = (-scrollTop.scrollTop / landingPageContainerHeight) + 1;
}

function fadeSecondHeaderOpacity() {
    let sumOfHeights = articlesHolderHeight + landingPageContainerHeight + secondHeaderContainerHeight
    secondHeaderContainer.style.opacity = scrollTop.scrollTop >= sumOfHeights? "0.03" : "1";
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




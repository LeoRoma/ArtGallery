const navbarImages = document.querySelectorAll('.navbar-image');
const navbarItems = document.querySelectorAll('.navbar-item');

let mouseCoords = {
    x: 0,
    y: 0
}

function getMouseCoords(event){
    mouseCoords.x = event.pageX;
    mouseCoords.y = event.pageY;
}

function followMouse(index){
    navbarImages[index].style.left = mouseCoords.x + 10 + "px";
    navbarImages[index].style.top = mouseCoords.y + "px";
}

for(let i = 0; i < navbarItems.length; i++){
    const navbarItem = navbarItems[i];
    navbarItem.addEventListener('mouseenter', () => {
        navbarImages[i].style.opacity = "1";
        navbarImages[i].style.pointerEvents = "none";
    })

    navbarItem.addEventListener('mousemove', (event) => {
        getMouseCoords(event);
        followMouse(i);
     
    })

    navbarItem.addEventListener('mouseleave',() => {
        navbarImages[i].style.display = "hidden";
        navbarImages[i].style.opacity = "0";
    })
}
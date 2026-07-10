// we create a constant for this menu variable, we need to call
// .nav-list class from css
const menu = document.querySelector(".nav-list");

// Once the function is called, It will trigger a toggle method
// calling .nav-list.show class
function openMenu() {
    menu.classList.toggle("show");
}
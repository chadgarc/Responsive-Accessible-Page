// we create a constant for this menu variable, we need to call
// .nav-list class from css
const menu = document.querySelector(".nav-list");
// By default the menu it's usually closed
let open = false;

// We'll call the function from the html button, when it's closed
// it will change the status of display between none and flex
function openMenu() {
    if (open) {
        menu.style.display = "none";
        open = false;
    } else if (!open) {
        menu.style.display = "flex";
        open = true;
    }
}
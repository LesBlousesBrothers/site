
const triggerMenu = document.getElementById("menu");
const triggerMenuOpen = document.getElementById("menuOpen");
const triggerMenuClosed = document.getElementById("menuClosed");
const nav = document.getElementById("nav")
triggerMenuOpen.addEventListener("click", () => {
    // nav.classList.add("flex")
    nav.classList.remove("hidden");
    //triggerMenuClosed.style.display ="block";
    triggerMenuClosed.classList.remove("hidden");
    triggerMenuClosed.classList.add("block");
    triggerMenuOpen.style.display = "none";
});
triggerMenuClosed.addEventListener("click", () => {
    nav.classList.add("hidden");
    // nav.classList.remove("flex")
    triggerMenuOpen.style.display ="block";
    //triggerMenuClosed.style.display = "none";
    triggerMenuClosed.classList.remove("block");
    triggerMenuClosed.classList.add("hidden");
});

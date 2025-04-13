
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar")
    const navItems = document.getElementById("nav-items")
    const home = document.getElementById("home");

    const marginTop = navbar.offsetHeight + navItems.offsetHeight + 20;
    
    home.style.marginTop = `${marginTop}px`;

    // dynamic height for hero content
    const heroCenterHeight = window.innerHeight - marginTop - 20;
    const heroCenter = document.querySelector(".hero-center");
    heroCenter.style.height = `${ heroCenterHeight }px`;


})
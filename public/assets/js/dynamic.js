
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar")
    const navItems = document.getElementById("nav-items")
    const home = document.querySelector(".dyanmic-margin-top");

    const marginTop = navbar.offsetHeight + navItems.offsetHeight + 20;
    
    home.style.marginTop = `${marginTop}px`;

    // dynamic height for hero content
    const heroCenterHeight = window.innerHeight - marginTop - 20;
    const heroCenter = document.querySelector(".hero-center");
    if (heroCenter) heroCenter.style.height = `${ heroCenterHeight }px`;

    // dynamic about image
    const aboutImage = document.querySelector(".image-wrapper")
    const aboutWidth = aboutImage.offsetWidth;
    if (aboutImage) aboutImage.style.height = `${aboutWidth}px`;

})
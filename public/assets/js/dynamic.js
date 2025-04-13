
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
    if (aboutImage) {
        const aboutWidth = aboutImage.offsetWidth;
        aboutImage.style.height = `${aboutWidth}px`;
    }

    // dynamic skill width
    const skills = document.querySelectorAll(".skill-wrapper");
    if (skills) {
        skills.forEach(skill => {
            const skillWidth = skill.offsetWidth;
            const circleWidth = skill.lastChild.offsetWidth;
            skill.firstChild.style.width = `${skillWidth - (circleWidth / 2)}px`;
            console.log(skillWidth - (circleWidth / 2))
        })
    }

})
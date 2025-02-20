window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav");
    let contactfixed = document.getElementById("contact");
    let mynamefixed = document.getElementById("myname");
    let mylogofixed = document.getElementById("logofixed");
    let linkefixed = document.querySelector(".links");

    if (window.scrollY > 100) {
        navbar.classList.add("navbar-fixed");
        contactfixed.classList.add("contact-fixed");
        mynamefixed.classList.add("myname-fixed");
        mylogofixed.classList.add("mylogo-fixed");
        linkefixed.style.display="flex";
        
    } else {
        navbar.classList.remove("navbar-fixed");
        contactfixed.classList.remove("contact-fixed");
        mynamefixed.classList.remove("myname-fixed");
        mylogofixed.classList.remove("mylogo-fixed");
        linkefixed.style.display="none";

    }
});
document.addEventListener("DOMContentLoaded", () => {


    console.log("Uncaged Mind Website Loaded");


    const header = document.querySelector(".header");


    window.addEventListener("scroll", () => {


        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }


    });



});





// MOBILE MENU

document.addEventListener("click", function (e) {


    const hamburger = e.target.closest(".hamburger");


    if (hamburger) {


        hamburger.classList.toggle("active");


        const mobileMenu = document.querySelector(".mobile-menu");


        if (mobileMenu) {

            mobileMenu.classList.toggle("active");

        }


        document.body.classList.toggle("menu-open");


    }



});

function setActiveNav() {

    const navLinks = document.querySelectorAll(".nav-links a");

    if (navLinks.length === 0) {
        setTimeout(setActiveNav, 100);
        return;
    }


    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    navLinks.forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

}


setActiveNav();
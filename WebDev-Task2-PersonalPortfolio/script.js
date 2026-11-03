// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(

        "aria-label",

        isOpen ? "Close navigation" : "Open navigation"

    );

});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});

// DARK AND LIGHT THEME SWITCHER

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const lightMode = document.body.classList.contains("light-theme");

    themeToggle.textContent = lightMode ? "☾" : "◐";

    themeToggle.setAttribute(

        "aria-label",

        lightMode ? "Switch to dark theme" : "Switch to light theme"

    );

});

// PROJECT CATEGORY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (

                selectedFilter === "all" ||

                category === selectedFilter

            ) {

                card.hidden = false;

            } else {

                card.hidden = true;

            }

        });

    });

});

// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.12

        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 450) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =

    new Date().getFullYear();

// ACTIVE NAVIGATION INDICATOR

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        link.classList.toggle(

                            "active",

                            link.getAttribute("href") ===

                            `#${entry.target.id}`

                        );

                    });

                }

            });

        },

        {

            rootMargin: "-35% 0px -55% 0px"

        }

    );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}
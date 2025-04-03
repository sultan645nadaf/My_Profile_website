// Particles.js Background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 4, random: true },
        move: { enable: true, speed: 3, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    }
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating Bubble Animation
document.querySelectorAll(".bubble").forEach(bubble => {
    bubble.addEventListener("mouseover", () => {
        bubble.classList.add("floating");
    });
    bubble.addEventListener("mouseleave", () => {
        bubble.classList.remove("floating");
    });
});

// Profile Card Animation
window.addEventListener("load", () => {
    document.querySelector(".profile-card").classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader after 1.2 seconds
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hide-preloader");
    }, 1200);

    // Fetch the total views from the backend
    fetch("http://localhost:3000/get-views")
        .then(response => response.json())
        .then(data => {
            document.getElementById("view-counter").innerText = "Views: " + data.total_views;
        })
        .catch(error => console.error("❌ Error fetching views:", error));

    // Track every visit
    fetch("http://localhost:3000/track-view")
        .catch(error => console.error("❌ Error tracking view:", error));
});
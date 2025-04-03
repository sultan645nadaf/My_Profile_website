// Particles.js Background Optimization
particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 2.5, random: true },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 2 }
        }
    }
});

// Smooth Scroll Optimization
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Floating Bubble Animation
document.querySelectorAll(".bubble").forEach(bubble => {
    bubble.addEventListener("mouseenter", () => bubble.classList.add("floating"));
    bubble.addEventListener("mouseleave", () => bubble.classList.remove("floating"));
});

// Move Profile Image on Page Navigation
function moveProfileImage() {
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
        profileCard.classList.add("moved");
    }
}

window.addEventListener("load", () => {
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
        profileCard.classList.add("fade-in");
    }
});

// Preloader Handling with Smooth Exit
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide-preloader");
        }, 1000);
    }

    // Fetch Total Views with Improved Error Handling
    function fetchViews(retries = 3) {
        fetch("http://localhost:3000/get-views")
            .then(response => response.json())
            .then(data => {
                const viewCounter = document.getElementById("view-counter");
                if (viewCounter) {
                    viewCounter.innerText = `Views: ${data.total_views}`;
                }
            })
            .catch(error => {
                console.error("❌ Error fetching views:", error);
                if (retries > 0) {
                    setTimeout(() => fetchViews(retries - 1), 2000);
                }
            });
    }
    fetchViews();

    // Track Page View with Fallback
    fetch("http://localhost:3000/track-view")
        .catch(error => console.error("❌ Error tracking view:", error));
});

// Moving Colorful Rectangles Background Effect
function createRectangle() {
    const rect = document.createElement("div");
    rect.classList.add("moving-rectangle");
    rect.style.top = Math.random() * window.innerHeight + "px";
    rect.style.left = "-50px"; // Start from the left side
    rect.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    document.body.appendChild(rect);

    let speed = Math.random() * 5 + 5; // Speed between 5 and 10
    let moveInterval = setInterval(() => {
        rect.style.left = parseFloat(rect.style.left) + speed + "px";
        rect.style.transform = `translateX(${(Math.random() - 0.5) * 5}px)`; // Glitch effect

        // Remove rectangle once it moves out of the screen
        if (parseFloat(rect.style.left) > window.innerWidth) {
            clearInterval(moveInterval);
            rect.remove();
        }
    }, 20);

    // Cursor interaction: Boost speed and change color when hovered
    rect.addEventListener("mouseenter", () => {
        speed *= 2; // Double speed on hover
        rect.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Change color
        setTimeout(() => {
            rect.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Briefly change color
        }, 100);
    });
}

// Generate rectangles at a faster intervaland 
setInterval(createRectangle, 500);
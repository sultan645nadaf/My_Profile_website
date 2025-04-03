document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("slide-in")) {
        document.body.classList.add("slide-in");
    }

    const links = document.querySelectorAll("a");
    const profileContainer = document.getElementById("profile-container");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");

            document.body.classList.add("slide-out");
            localStorage.setItem("profileMoved", "true");

            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Match with slide-out animation duration
        });
    });

    if (localStorage.getItem("profileMoved") === "true" && profileContainer) {
        profileContainer.classList.add("profile-move");
    }
});
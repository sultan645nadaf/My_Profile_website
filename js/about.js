document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fall-in");

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");

            document.body.classList.add("fall-out");

            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Match with fall-out animation duration
        });
    });
});
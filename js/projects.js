document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".projects h2");
    const projectGrid = document.querySelector(".project-grid");
    const projects = document.querySelectorAll(".project-card");

    // Initialize scattered effect with a more dynamic spread
    projects.forEach((project) => {
        const randomX = (Math.random() - 0.5) * 600; // Increased scatter range
        const randomY = (Math.random() - 0.5) * 600;
        const randomRotate = (Math.random() - 0.5) * 80; // More rotation variation

        project.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        project.style.opacity = "0";
        project.style.transition = "transform 1s ease-out, opacity 0.6s ease-out";
    });

    title.addEventListener("click", () => {
        title.classList.add("clicked");
        projectGrid.classList.add("visible");

        // Animate cards to settle into position with bounce effect
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.transform = "translate(0, 0) rotate(0deg) scale(1.05)";
                project.style.opacity = "1";

                setTimeout(() => {
                    project.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
                }, 200); // Subtle bounce effect
            }, index * 150); // Stagger animation
        });
    });

    projects.forEach((project) => {
        const hoverElement = project.querySelector(".project-hover");

        if (hoverElement) {
            project.addEventListener("mouseenter", () => {
                hoverElement.style.opacity = "1";
                hoverElement.style.transition = "opacity 0.3s ease";
            });

            project.addEventListener("mouseleave", () => {
                hoverElement.style.opacity = "0";
                hoverElement.style.transition = "opacity 0.3s ease";
            });
        }

        project.addEventListener("click", () => {
            const isExpanded = project.classList.contains("expanded");

            document.querySelectorAll(".project-card").forEach((p) => {
                p.classList.remove("expanded");
            });

            if (!isExpanded) {
                project.classList.add("expanded");
            }
        });
    });
});
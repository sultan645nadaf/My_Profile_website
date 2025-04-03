document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".projects h2");
    const projectGrid = document.querySelector(".project-grid");
    const projects = document.querySelectorAll(".project-card");

    // Enable scrolling inside the project grid
    projectGrid.style.overflowY = "auto";
    projectGrid.style.maxHeight = "80vh"; // Ensures it doesn't take full screen

    // Improved scattered effect for dynamic yet controlled layout
    projects.forEach((project) => {
        const randomX = (Math.random() - 0.5) * 400;
        const randomY = (Math.random() - 0.5) * 400;
        const randomRotate = (Math.random() - 0.5) * 60;

        project.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        project.style.opacity = "0";
        project.style.transition = "transform 1s ease-out, opacity 0.6s ease-out";
    });

    title.addEventListener("click", () => {
        title.classList.add("clicked");
        projectGrid.classList.add("visible");

        // Animate project cards into position with refined bounce effect
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.transform = "translate(0, 0) rotate(0deg) scale(1.07)";
                project.style.opacity = "1";

                setTimeout(() => {
                    project.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
                }, 250);
            }, index * 130);
        });
    });

    projects.forEach((project) => {
        const hoverElement = project.querySelector(".project-hover");

        if (hoverElement) {
            project.addEventListener("mouseenter", () => {
                hoverElement.style.opacity = "1";
                hoverElement.style.transition = "opacity 0.25s ease";
            });

            project.addEventListener("mouseleave", () => {
                hoverElement.style.opacity = "0";
                hoverElement.style.transition = "opacity 0.25s ease";
            });
        }

        project.addEventListener("click", () => {
            const isExpanded = project.classList.contains("expanded");

            document.querySelectorAll(".project-card").forEach((p) => {
                p.classList.remove("expanded");
                p.style.transform = "scale(1)";
            });

            if (!isExpanded) {
                project.classList.add("expanded");
                project.style.transform = "scale(1.1)";
            }
        });
    });
});
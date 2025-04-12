// Particle.js background init
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded.');
});

// Blog functionality
document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");
    const posts = JSON.parse(localStorage.getItem("futuristicBlogPosts")) || [];
    posts.forEach(addPostToDOM);

    const form = document.getElementById("new-post-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("blog-title").value.trim();
            const content = document.getElementById("blog-content").value.trim();

            if (title && content) {
                const post = { title, content, time: new Date().toLocaleString() };
                posts.unshift(post);
                localStorage.setItem("futuristicBlogPosts", JSON.stringify(posts));
                addPostToDOM(post);
                form.reset();
            }
        });
    }
});

function addPostToDOM(post) {
    const div = document.createElement("div");
    div.className = "blog-post";
    div.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.time}</small>
        <p>${post.content}</p>
    `;
    document.getElementById("blog-list").appendChild(div);
}

// 🔐 Simple admin passcode check
function checkAccess() {
    const pass = document.getElementById("admin-pass").value;
    const correctPass = "sultan123"; // Change to your desired passcode

    if (pass === correctPass) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("post-form").style.display = "block";
    } else {
        alert("❌ Incorrect passcode!");
    }
}
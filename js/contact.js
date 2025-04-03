// Initialize EmailJS with the correct Public Key
try {
    emailjs.init("XvXNUYXI7ZtrLtBD0");  // Replace with your actual EmailJS Public Key

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get form elements
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formStatus = document.getElementById("form-status");
        const submitButton = document.getElementById("submit-button");

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !message) {
            formStatus.innerHTML = "<p class='error'>Please fill in all fields.</p>";
            return;
        } else if (!emailPattern.test(email)) {
            formStatus.innerHTML = "<p class='error'>Please enter a valid email address.</p>";
            return;
        }

        // Show loading status and disable inputs
        formStatus.innerHTML = "<p>Sending your message...</p>";
        submitButton.disabled = true;

        // Prepare the email data
        const emailData = {
            name: name,
            title: "User Inquiry",
            email: email,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_i1xx6qq", "template_nqz8ty6", emailData)
            .then(function(response) {
                console.log("Success:", response);
                formStatus.innerHTML = "<p class='success'>Your message has been sent successfully!</p>";
                document.getElementById("contact-form").reset();
            })
            .catch(function(error) {
                console.error("Error:", error);
                formStatus.innerHTML = `<p class='error'>Failed to send message. ${error.text || "Please try again later."}</p>`;
            })
            .finally(() => {
                submitButton.disabled = false;
                // Clear status message after 5 seconds
                setTimeout(() => {
                    formStatus.innerHTML = "";
                }, 5000);
            });
    });

} catch (error) {
    console.error("EmailJS Initialization Error:", error);
    alert("Email service is currently unavailable. Please try again later.");
}
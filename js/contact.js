// Initialize EmailJS with the correct Public Key
try {
    emailjs.init("XvXNUYXI7ZtrLtBD0");  // Replace with your actual EmailJS Public Key

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const formStatus = document.getElementById("form-status");

        // Validate form fields
        if (!name || !email || !message) {
            formStatus.innerHTML = "<p class='error'>Please fill in all fields.</p>";
            return;
        }

        // Show loading status
        formStatus.innerHTML = "<p>Sending your message...</p>";

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
            })
            .catch(function(error) {
                console.error("Error:", error);
                formStatus.innerHTML = "<p class='error'>There was an error sending your message. Please try again later.</p>";
            });
    });

} catch (error) {
    console.error("EmailJS Initialization Error:", error);
    alert("Email service is currently unavailable. Please try again later.");
}
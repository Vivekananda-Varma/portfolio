document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Get the navbar height dynamically
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            // Set the top position of the success alert based on the navbar height
            const successAlert = document.getElementById("successAlert");
            successAlert.style.top = `${navbarHeight + 10}px`; // 10px margin from the navbar

            // Show the success alert
            successAlert.classList.remove("d-none");
            form.reset(); // Reset form fields
        } else {
            alert("There was an error submitting your message. Please try again.");
        }
    } catch (error) {
        alert("There was an error submitting your message. Please try again.");
    }
});

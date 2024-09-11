console.log("script is loaded");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("purchaseForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const username = document.getElementById("username").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;

            // Process the form data
            console.log("Name:", username);
            console.log("Phone:", phone);
            console.log("Address:", address);

            // Send data to the backend
            fetch('http://localhost:3000/OnlineShopping', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, phone, address }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Show an alert to confirm submission
                alert("Form submitted successfully!");

                // Reset the form fields
                form.reset();

                // Close the modal after submission
                const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
                if (modal) {
                    modal.hide();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Optionally handle error
                alert("An error occurred while submitting the form.");
            });
        });
    } else {
        console.error('Form not found!');
    }
});

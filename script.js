document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submit event listener
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const messages = [];
        let isValid = true;

        // Validation checks
        if (username === "") {
            messages.push("Username is required.");
            isValid = false;
        }

        if (email === "") {
            messages.push("Email is required.");
            isValid = false;
        }

        if (password === "") {
            messages.push("Password is required.");
            isValid = false;
        }

        // Display validation results
        if (!isValid) {
            feedbackDiv.style.color = "red";
            feedbackDiv.innerHTML = messages.join("<br>");
        } else {
            feedbackDiv.style.color = "green";
            feedbackDiv.textContent = "Registration successful!";
        }
    });

    // Async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to display users
            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the container
            dataContainer.appendChild(userList);

        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the function
    fetchUserData();
});

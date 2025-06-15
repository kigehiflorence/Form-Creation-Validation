document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const messages = [];
        let isValid = true;

        if (username === "") {
            messages.push("Username is required.");
            isValid = false;
        } else if (username.length < 3) {
            messages.push("Username must be at least 3 characters long.");
            isValid = false;
        }

        if (email === "") {
    messages.push("Email is required.");
    isValid = false;
} else if (!email.includes("@")) {
    messages.push("Please enter a valid email address.");
    isValid = false;
}

        }

       if (password === "") {
    messages.push("Password is required.");
    isValid = false;
} else if (password.length < 6) {
    messages.push("Password must be at least 6 characters long.");
    isValid = false;
}

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });

    // Async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            dataContainer.innerHTML = '';

            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    fetchUserData();
});

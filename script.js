document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    // other code will go here later — like event listeners or validations
    
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

            // Loop through users and add them to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the function
    fetchUserData();
});

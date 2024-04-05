// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Example validation (replace this with your actual validation logic)
    if (username === "tanuja" && password === "8888") {
        // Redirect to the home page if login is successful
        window.location.href = "frame3.html";
    } else {
        // Display an error message or perform other actions for failed login
        alert("Invalid username or password. Please try again.");
    }
});

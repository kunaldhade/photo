// Check if the user is authenticated by checking sessionStorage
const passwordVerified = sessionStorage.getItem('passwordVerified');

// If the password is not verified, redirect to the password page
if (!passwordVerified && window.location.pathname !== "/password.html") {
    window.location.href = "/password.html";  // Redirect to password page
}

// Password page logic (Only for password.html)
if (window.location.pathname === "/password.html") {
    const passwordScreen = document.getElementById("password-screen");
    const passwordInput = document.getElementById("password-input");
    const submitBtn = document.getElementById("submit-btn");
    const errorMessage = document.getElementById("error-message");

    // Set your password here (modify with your actual password)
    const correctPassword = "8805973346";  // CHANGE this to your actual password

    // Handle password submission
    submitBtn.addEventListener("click", () => {
        const enteredPassword = passwordInput.value; // Get user input
        if (enteredPassword === correctPassword) {
            // Save password verification in sessionStorage
            sessionStorage.setItem('passwordVerified', 'true');
            window.location.href = "index.html";  // Redirect to main page
        } else {
            errorMessage.textContent = "Incorrect password. Please try again."; // Show error
        }
    });

    // Allow Enter key to submit
    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            submitBtn.click();
        }
    });
}

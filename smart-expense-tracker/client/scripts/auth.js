document.addEventListener("DOMContentLoaded", () => {
    // Initialize Materialize Tabs
    const tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);

    // Fake User Database (for demo purposes only)
    const users = [
        {
            name: "Arshdeep Singh",
            email: "s224750073@deakin.edu.au",
            password: "websitepsw@123"
        }
    ];

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default submission
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        // Validate login credentials
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            alert(`Welcome back, ${user.name}!`);
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            showError("Invalid email or password.", "login-error-message");
        }
    });

    // Signup Form Handling
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default submission
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        // Validate fields
        if (!name) {
            showError("Name is required.", "signup-error-message");
            return;
        }
        if (!validateEmail(email)) {
            showError("Please enter a valid email address.", "signup-error-message");
            return;
        }
        if (password.length < 6) {
            showError("Password must be at least 6 characters long.", "signup-error-message");
            return;
        }

        // Check if email is already registered
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            showError("Email is already registered.", "signup-error-message");
            return;
        }

        // Add user to "database"
        users.push({ name, email, password });
        alert("Sign up successful! Please log in.");
        M.Tabs.getInstance(document.querySelector(".tabs")).select("login"); // Switch to login tab
    });

    // Helper Functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(message, elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
});

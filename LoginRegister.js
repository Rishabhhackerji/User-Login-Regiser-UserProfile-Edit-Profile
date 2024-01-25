function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Store user information in an in-memory array (replace with database storage)
    // const newUser = { username, email, password };
    // users.push(newUser);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful! You can now log in.");
    window.location.href = "Login.html"; // Redirect to login page
}

function login() {

    const loginUsername=document.getElementById("loginUsername").value;
    const loginPassword=document.getElementById("loginPassword").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        window.location.href = 'UserProfile.html';
        alert("Login successful!");
        // Redirect or perform other actions after successful login
    } else {
        alert("Invalid username or password");
    }
    
}

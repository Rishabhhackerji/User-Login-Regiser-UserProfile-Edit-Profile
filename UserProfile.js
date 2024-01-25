document.addEventListener('DOMContentLoaded', function () {
    // Load user information on page load
    loadUserProfile();
});

function loadUserProfile() {
    // Fetch user information from the in-memory array (replace with database fetch)
    // Update the following lines with your actual user data
    // const user = users.find(u => u.username === loggedInUser);
    const user = {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email")
    }
    const profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = `
         <div class="userp">
            <img src="user.jpg" alt="Profile Picture" id="profile-picture">
        </div>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
         <!-- Add more profile information here -->
    `;
}

function editProfile() {
    // Redirect or show an edit form for users to update their profile
    // Assuming the user profile page is named 'profile.html'
    window.location.href = 'EditProfile.html';

    // alert('Edit profile functionality to be implemented!');
    // You can use window.location.href = 'edit-profile.html'; for redirection
}

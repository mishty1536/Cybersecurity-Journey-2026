
const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");
const profile = document.getElementById("profile");

searchBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a GitHub username");
        return;
    }

    getProfile(username);
});

async function getProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    profile.innerHTML = `
        <img src="${data.avatar_url}" alt="Profile Picture">

        <h2>${data.name || "No Name Available"}</h2>

        <p><strong>Username:</strong> ${data.login}</p>

        <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>

        <p><strong>Followers:</strong> ${data.followers}</p>

        <p><strong>Following:</strong> ${data.following}</p>

        <p><strong>Repositories:</strong> ${data.public_repos}</p>

        <a href="${data.html_url}" target="_blank">
            View GitHub Profile
        </a>
    `;
}
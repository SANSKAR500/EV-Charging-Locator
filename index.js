const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

document.querySelector(".login form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "main.html"; // Redirect to main.html
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.innerHTML = "<p style='color: green;'>Message sent successfully!</p>";
        document.getElementById('contactForm').reset();
    } else {
        formMessage.innerHTML = "<p style='color: red;'>Please fill in all fields.</p>";
    }
});
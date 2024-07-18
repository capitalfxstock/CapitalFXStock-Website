const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');

if (bar && navbar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

const close = document.getElementById('close');

if (close && navbar) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}


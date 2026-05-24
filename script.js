
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = "scale(1)";
    });
});
const loginForm = document.querySelector("form");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "1px solid red";
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        if (isValid) {
            alert("Login successful 🚀");
        } else {
            alert("Please fill all fields!");
        }
    });
}

const signupForm = document.querySelector("form");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const password = signupForm.querySelectorAll("input")[2];
        const confirmPassword = signupForm.querySelectorAll("input")[3];

        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                return;
            }
        }

        alert("Signup successful 🎉");
    });
}

const title = document.querySelector("h1");

if (title) {
    setInterval(() => {
        title.style.transform = "translateY(-5px)";

        setTimeout(() => {
            title.style.transform = "translateY(0)";
        }, 500);

    }, 2000);
}
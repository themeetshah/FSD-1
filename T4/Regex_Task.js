function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const special = document.getElementById("special").value;

    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{7,15}$/;
    const passwordPattern = /[a-zA-Z0-9]\w/;
    const mobilePattern = /^\d{10}$/;
    const cityPattern = /^(Ahm).*d$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const specialPattern = /^[a-zA-Z0-9]*$/;

    if (!username || !password || !mobile || !city || !email || !special) {
        alert("All fields are required. Please fill out every field.");
        return;
    }

    if (!usernamePattern.test(username)) {
        alert("Invalid username. It must start with a letter, contain no spaces, and be 8-16 characters long.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Invalid password. It must contain at least one uppercase letter, one digit, and one special character.");
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Invalid mobile number. It must be exactly 10 digits.");
        return;
    }

    if (!cityPattern.test(city)) {
        alert("Invalid city. It must start with 'Ahm' and end with 'd'.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email. It must contain '@' and '.' in the correct format.");
        return;
    }

    if (!specialPattern.test(special)) {
        alert("Invalid input for 'special'. It must not contain any special characters.");
        return;
    }

    alert("Form submitted successfully!");
    return;
}
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (!email || !password) {
        error.textContent = "All fields are required";
        return;
    }

    const users = getUsers();

    if (users.find(u => u.email === email)) {
        error.textContent = "User already exists";
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "Login.html";
}

function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        error.textContent = "Invalid credentials";
        return;
    }

    localStorage.setItem("loggedInUser", email);
    window.location.href = "Dashboard.html";
}

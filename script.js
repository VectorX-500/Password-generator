function generatePassword() {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let length = document.getElementById("length").value;

    if (length < 4) {
        alert("Enter length at least 4");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

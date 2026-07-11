const userName = document.querySelectorAll(".user_name");
const userRol = document.querySelectorAll(".user_rol");

document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("userPreferences"));

    userRol.forEach(date => {
        date.textContent = user.role
    });
    userName.forEach(date => {
        date.textContent = user.name
    });
});

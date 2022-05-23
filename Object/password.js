var togglePassword = document.querySelector("#togglePassword");
var password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    var type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

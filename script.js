const container = document.querySelector(".center"),
    pwShowHide = document.querySelectorAll(".pwslash"),
    pwFields = document.querySelectorAll(".password");



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type == "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})


function closeWindow() {
    let new_window = open(location, '_self');

    new_window.close();
    return false;
}
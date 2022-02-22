let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorEmail = document.querySelector(".errorEmail");
let errorPass = document.querySelector(".errorPass");
let u_check = document.querySelector(".u_check");
let p_check = document.querySelector(".p_check");
let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&+\*-])[a-zA-Z0-9!@#$%\^&+\*-]{8,}$/;

email.addEventListener("keyup", function(){
    if (!email.value.match(emailRegex)){
        email.style.border = "2px solid #f10000";
        u_check.style.display="block";
        errorEmail.style.display="none";
    } else {
        email.style.border = "2px solid #07cf43";
        u_check.style.display="none";
    }
});
password.addEventListener("keyup", function(){
    if (!password.value.match(passRegex)){
        password.style.border = "2px solid #f10000";
        p_check.style.display="block";
        errorPass.style.display="none";
    } else {
        password.style.border = "2px solid #07cf43";
        p_check.style.display="none";
    }
});

function validate(){
    if (!email.value.match(emailRegex)){
        errorEmail.style.display="block";
        u_check.style.display="none";
        return false;
    } else if (!password.value.match(passRegex)){
        errorPass.style.display="block";
        p_check.style.display="none";
        return false;
    }
    else {
        errorEmail.style.display="none";
        errorPass.style.display="none";
        alert("success");
        return true;
    }
}
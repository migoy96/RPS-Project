let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);


function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = 'none';
        return true;
    }
}

function password_Verify(){
    if (password.value.length >= 10){
        password.style.border = "1px solid silver";
        pass_error.style.display = 'none';
        return true;
    }
}

function validated(){
    if(email.value.length < 8){
        email.style.border = "1px solid red";
        email_error.style.display = 'display';
        email.focus();
        alert("Please Input Your Email")
        return false;
    }
    if(password.value.length < 10){
        password.style.border = "1px solid red";
        pass_error.style.display = 'display';
        password.focus();
        alert("Please Input Your Password")
        return false;
    }
}



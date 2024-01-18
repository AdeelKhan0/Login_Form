var inputError = document.getElementById('input-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validation(){
    var name = document.getElementById('contact-name').value;
    if (name.length==0) {
        inputError.innerHTML = 'Name is required!';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        inputError.innerHTML = 'Write a full name';
        return false;
    }
    inputError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validationN() {
    var phone = document.getElementById('contact-no').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'phone no is required!';
        return false;
    }
    if (phone.length !== 12) {
        phoneError.innerHTML = 'Number should be 12 digits!';
        return false;
    }
    if (!phone.match(/^[0-9]{12}$/)) {
        phoneError.innerHTML = 'only digits please!';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

    function validationE(){
        var email = document.getElementById('contact-Email').value;
            if (email.length == 0) {
            emailError.innerHTML = 'Email is required!';
            return false;
        }
        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailError.innerHTML = 'Email is Invalid';
            return false;
        }
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;

    }
        function validationmsg(){
            var message = document.getElementById('contact-msg').value;
            var required = 30;
            var left = required-message.length;

            if (left > 0) {
                msgError.innerHTML = left + ' more characters required'
                return false;
            }
            msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
            return true;
        }
        function validateform() {
            if (!validationN() || !validationN() || !validationE() || !validationmsg()) {
                submitError.style.display = 'block';
                submitError.innerHTML = 'please fix the error to submit';
                setTimeout(() => {
                    submitError.style.display = 'none'; 
                }, 3000);
                return false;
            }
        }





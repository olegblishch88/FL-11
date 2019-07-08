let changePassword;
let oldPassword;
let newPassword;
let repeatNewPassword;
let emailLength = 6;
let passwordLength = 5;
let askEmail = prompt('Please enter your email:');
if (askEmail === '' || askEmail === null) {
    alert('Cancelled')
} else if (askEmail.length < emailLength) {
    alert('I dont know any emails having name length less than 6 symbols');
} else if (askEmail === 'user@gmail.com' || askEmail === 'admin@gmail.com') {
    let askPassword = prompt('Please enter your password:');
    if (askPassword === '' || askPassword === null) {
        alert('Cancelled');
    }
    if (askEmail === 'admin@gmail.com' && askPassword === 'AdminPass' 
    || askEmail === 'user@gmail.com' && askPassword === 'UserPass') {
        changePassword = confirm('Do you want to change the password?');
        if (changePassword === false) {
            alert('You have failed the change')
        } else if (changePassword) {
            oldPassword = prompt('Please enter your old passport');
            if (oldPassword === '' || oldPassword === null) {
                alert('Cancelled');
            } else if (oldPassword === askPassword) {
                newPassword = prompt('Please enter new password');
                if (newPassword.length < passwordLength) {
                    alert('Its too short password. Sorry. ');
                } else if (newPassword) {
                    repeatNewPassword = prompt('Please repeat your new password:');
                    if (repeatNewPassword !== newPassword) {
                        alert('You wrote thr wrong password');
                    } else if (repeatNewPassword === newPassword) {
                        alert('You have successfully changed your password')
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else if (askPassword !== 'AdminPass' || askPassword !== 'UserPass') {
        alert('Wrong password');
    }
} else {
    alert('I dont know you');
}
// object to store user details

let userDetailsDatabase = {}


// function to get user details
function getUserDetails() {

// get username
    let userName = prompt("Enter your username")

 
    function validateUserName(userName) {
        if (userName.length < 10 && userName.length > 0) {
            return true
        }else{
            return false
        }
    }

    while (validateUserName(userName) == false) {
        userName = prompt("Username must be less than ten and greater than zero")
    }

    userDetailsDatabase["userName"] = userName

    // get email address
    let email = prompt("Enter your email address")

    if (email == null){
        return
    }

    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if (emailCheck == true) {
            return true
        } else {
            return false
        }
    }

 //   while (validateEmail(email) == false) {
 //       email = prompt("Enter a valid email")
 //   }

    userDetailsDatabase["Email"] = email


    // get phone number
    let phoneNumber = prompt("Enter your phone number")

    if (phoneNumber  == null){
        return
    }

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        } else {
            return false
        }
    }

    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt("Phone number must be 11 degits")
    }

    userDetailsDatabase["PhoneNumber"] = phoneNumber


    // get password
    let password = prompt("Enter your password")

    if (password == null){
        return
    }

    function validatePassword(password){
        if (password.length < 6) {
            return false
        } else {
            return true
        }
    }

    while (validatePassword(password) == false) {
        password = prompt("Password must not be less than 6 degits")
    }

    userDetailsDatabase["Password"] = password

    //comfirm password
    let comfirmPassword = prompt("Comfirm password")

    if (comfirmPassword == null){
        return
    }

    function validateComfirmPassword(comfirmPassword) {
        if (comfirmPassword != password) {
            return false
        } else {
            return true
        }
    }

    while (validateComfirmPassword(comfirmPassword) == false) {
        comfirmPassword = prompt("Comfirmed password does not match the original password. Please try again")
    }

    userDetailsDatabase["Comfirmed Password"] = comfirmPassword
}

/* ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi; */

// function to display user details

function displayUserDetails() {
    alert(`Your Details\n\nusername: ${userDetailsDatabase.userName}\n
    Phone Number: ${userDetailsDatabase.PhoneNumber}\n
    Email: ${userDetailsDatabase.email}`)
}
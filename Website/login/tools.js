function login() {
    var username = document.getElementById("uName").innerText;
    var password = document.getElementById("pName").innerText;

    var userError = document.getElementById("usernameError").innerHTML;
    var passError = document.getElementById("passwordError").innerHTML;

    if (username == "" || password == "" ) {
        userError = "Please fill out username or password";
        passError = "Please fill out the username or password";
        return false;
    } else {
        fetch("Login details/details.JSON")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            for(i = 0; i < data.length; i++) {
                if (username == data[i].Username && password == data[i].Password) {
                return true; 
                } else {
                    userError = "Incorrect Username";
                    passError = "Incorrect Password";  
                    return false;
            } 
            }
        });
    }
}

function register() {
    window.location.replace("Register/SignUp.html");
}

function signUp() {
    var username = document.getElementById("uName").innerText;
    var password = document.getElementById("pName").innerText;
    var firstName = document.getElementById("fName").innerText;
    var lastName = document.getElementById("lName").innerText;
    var email = document.getElementById("email").innerText;

    var userError = document.getElementById("usernameError").innerHTML;
    var passError = document.getElementById("passwordError").innerHTML;
    var firstError = document.getElementById("firstnameError").innerHTML;
    var lastError = document.getElementById("lastnameError").innerHTML;
    var emailError = document.getElementById("emailError").innerHTML;
    if (username == "" || password == "" || firstName == "" || lastName == "" || email == "") {
        userError = "Please fill out the password";
        passError = "Please fill out the username";
        firstError = "Please fill out the first name";
        lastError  = "Please fill out the last name";
        emailError = "Please fill out the email";
        return false;
    } else {
        fetch("Login details/details.JSON")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            for(i = 0; i < data.length; i++) {
                if (username == data[i].Username) {
                userError = "Sorry someone has already taken this username try another one!";
                return false; 
                } else {
                    var details = { //creates the data and writes them into the form.
                        "Username" : username,
                        "Password" : password,
                        "First Name" : firstName,
                        "Last Name" : lastName,
                        "Email" : email 
                    }
                    var fs = require('fs');
                    fs.readFile("../Login details/details.json", "utf8", function readFileCallBack(err, data) {
                        //append the details.json file to add the current user that is going to signup
                        if (err) {
                            console.log(err);
                        } else {
                            details = JSON.parse(data); //Turn the details into an object
                            json = JSON.stringify(details); //Convert the object into JSON
                            fs.writeFile("../Login details/details.json", json, "utf8", callback); //Write the new record into the details.json file
                        }
                    })
                    return true;
            } 
            }
        });
}
}

function sucess() {
    window.location.replace("../login.html");
}

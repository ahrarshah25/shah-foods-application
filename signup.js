console.log("JS Connected!");


function userSignup(){
    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var userConfirmPassword = document.getElementById("confirm_password").value.trim();

    if(userName === "" && userEmail === "" && userPassword === "" && userConfirmPassword === ""){
        alert("Please Give Required Information To Register Your Account.")
    }else if(userName === localStorage.getItem("userName" , userName) && userEmail === localStorage.getItem("userEmail" , userEmail)){
        alert("User Already Exist Login Please!")
        window.location.href = "login.html"
    }else{
        localStorage.setItem("userName" , userName);
        localStorage.setItem("userEmail" , userEmail);
        localStorage.setItem("userPassword" , userPassword);
        localStorage.setItem("userConfirmPassword" , userConfirmPassword);
        localStorage.setItem("notificationSeen" , "false");
        alert("Signup Successful!");
        window.location.href = "login.html"
    }
}

var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){
    window.location.href = "profile.html"
}
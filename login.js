console.log("JS Connected!");


var userEmail = localStorage.getItem("userEmail");
var userPassword = localStorage.getItem("userPassword");

function userLogin(){
    // var userFound = false;
    var userEmailInput = document.getElementById("email").value.trim();
    var userPasswordInput = document.getElementById("password").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(userEmailInput === "" && userPasswordInput === ""){
        alert("Please Enter Required Information To Login Your Account!");
        return;
    }
    if(!regex.test(userEmailInput)){
        alert("Please Enter Correct Mail!\nFor Example: name@domain.com");
    }else if(userEmailInput === userEmail && userPasswordInput === userPassword){
        localStorage.setItem("userFound" , "true")
        alert("Login Successful.");
        window.location.href = "profile.html"
        return;
    }else{
        alert("Please Fill The Correct Information!\nIf You Dont Register Your Account From Signup Page So First Register It And Then Login!");
    }
};

var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){
    window.location.href = "profile.html"
}
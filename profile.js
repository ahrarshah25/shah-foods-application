console.log("JS Connected!");

var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);
var userPassword = localStorage.getItem("userPassword" , userPassword);
var result = localStorage.getItem("result");
var userCart = localStorage.getItem("product");
console.log(result);

var userNameDisplay = document.getElementById("userNameDisplay");
var userEmailDisplay = document.getElementById("userEmailDisplay");
var userCartDisplay = document.getElementById("userCartDisplay");
var userOrdersDisplay = document.getElementById("userOrdersDisplay");
var userLastLogin = document.getElementById("userLastLogin");

if (userName && userEmail && localStorage.getItem("userFound") === "true") {
    var userNameDisplay = document.getElementById("userNameDisplay").innerText = userName;
    var userEmailDisplay = document.getElementById("userEmailDisplay").innerText = userEmail;
    var userCartDisplay = document.getElementById("userCartDisplay").innerText = userCart;
    var userLastLogin = document.getElementById("userLastLogin").innerText = "Last Login: " + result
}else{
    alert("No User Data Found Please Login First");
    window.location.href ="login.html"
}

function continueShoping(){
    window.location.href = "shop.html"
};

function userLogout(){
    localStorage.removeItem("product");
    // localStorage.removeItem("userName");
    // localStorage.removeItem("userEmail");
    // localStorage.removeItem("userPassword");
    // localStorage.removeItem("userConfirmPassword");
    localStorage.removeItem("userFound" , "true");
    localStorage.removeItem("userAddress");
    localStorage.removeItem("userNumber");
    localStorage.removeItem("notification" , "seen");
    localStorage.removeItem("result");
    alert("Logged Out Successfuly!");
    window.location.href = "index.html";
}
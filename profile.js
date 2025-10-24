console.log("JS Connected!");

var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);
var userCart = localStorage.getItem("product");

var userNameDisplay = document.getElementById("userNameDisplay");
var userEmailDisplay = document.getElementById("userEmailDisplay");
var userCartDisplay = document.getElementById("userCartDisplay");
var userOrdersDisplay = document.getElementById("userOrdersDisplay");

if(userName && userEmail){
    var userNameDisplay = document.getElementById("userNameDisplay").innerText = userName;
    var userEmailDisplay = document.getElementById("userEmailDisplay").innerText = userEmail;
    var userCartDisplay = document.getElementById("userCartDisplay").innerText = userCart;
}else{
    alert("No User Data Found Please Login First");
    window.location.href ="login.html"
}

function continueShoping(){
    window.location.href = "shop.html"
};

function userLogout(){
    localStorage.removeItem("product");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userConfirmPassword");
    localStorage.removeItem("userFound" , "true");
    localStorage.removeItem("userAddress");
    localStorage.removeItem("userNumber");
    alert("Logged Out Successfuly!");
    window.location.href = "index.html";
}
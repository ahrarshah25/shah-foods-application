var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);
var userAddress = localStorage.getItem("userAddress" , userAddress);
var userContact = localStorage.getItem("userContact" , userContact);
var userFound = localStorage.getItem("userFound" , "true");


if(userFound === "true"){
var userOrderId = Math.floor(Math.random()*15000000+130);

var userNameDisplay = document.getElementById("userNameDisplay").innerText = userName;
var userEmailDisplay = document.getElementById("userEmailDisplay").innerText = userEmail;
var userAddressDisplay = document.getElementById("userAddressDisplay").innerText = userAddress;
var userContactDisplay = document.getElementById("userContactDisplay").innerText = userContact;
var userOrderIdDisplay = document.getElementById("userOrderIdDisplay").innerText = userOrderId;
}else{
    alert("Please Login To Your Account First!");
    window.location.href = "login.html"
}
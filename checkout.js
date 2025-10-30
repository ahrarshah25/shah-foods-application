var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);
var userFound = localStorage.getItem("userFound" , "true");
var productName = localStorage.getItem("userProductName");

var userNameDisplay = document.getElementById("userNameDisplay").innerText = userName;
var userEmailDisplay = document.getElementById("userEmailDisplay").innerText = userEmail;
var userProductDisplay = document.getElementById("userProductDisplay").innerText = productName;
// alert("product is " + productName);
if(userFound === "true"){
function userOrder(){
    // var userName = document.getElementById("userName").innerText = userName;
    // var userEmail = document.getElementById("userEmail").value.trim();
    var userAddress = document.getElementById("userAddress").value.trim();
    var userContact = document.getElementById("userContact").value.trim();
    
    if(userAddress === "" && userContact === ""){
        alert("Please Enter Your Address And Contact Number To Proceed");
    }else{
        localStorage.setItem("userAddress" , userAddress);
        localStorage.setItem("userContact" , userContact);
        window.location.href = "success.html"
    }
}
}else{
    alert("Please Login To Your Account!")
    window.location.href = "login.html"
}
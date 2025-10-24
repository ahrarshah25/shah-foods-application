console.log("JS Connected!");

var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);
var userPassword = localStorage.getItem("userPassword" , userPassword);
var result = localStorage.getItem("result");
var userCart = [localStorage.getItem("product1") + "\n" + localStorage.getItem("product2") + "\n" + localStorage.getItem("product3") + "\n" + localStorage.getItem("product4") + "\n" + localStorage.getItem("product5") + "\n" + localStorage.getItem("product6") + "\n" + localStorage.getItem("product7") + "\n" + localStorage.getItem("product8") + "\n" + localStorage.getItem("product9") + "\n" + localStorage.getItem("product10") + "\n" + localStorage.getItem("product11") + "\n" + localStorage.getItem("product12")].toString();
// var userCart = localStorage.getItem("product2");
// console.log("This is Cart Data Type " + typeof userCart[9]);

// console.log(result);

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

if(userCartDisplay !== "null"){
    var cartText = document.getElementById("userCartDisplay").innerText;
    var cartProductSplit = cartText.split("\n");
    for (var i = 0; i < cartProductSplit.length; i++) {
        if (cartProductSplit[i] === "null" || cartProductSplit[i] === "undefined" || cartProductSplit[i].trim() === "") {
            cartProductSplit[i] = "";
        }
    }
    document.getElementById("userCartDisplay").innerText = cartProductSplit.join("\n");
    // console.log("Hi");
    
}
// console.log(typeof userCartDisplay);

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
    localStorage.removeItem("userCart");
    localStorage.removeItem("userContact");
    localStorage.removeItem("userAddress")
    localStorage.removeItem("product1")
    localStorage.removeItem("product2")
    localStorage.removeItem("product3")
    localStorage.removeItem("product4")
    localStorage.removeItem("product5")
    localStorage.removeItem("product6")
    localStorage.removeItem("product7")
    localStorage.removeItem("product8")
    localStorage.removeItem("product9")
    localStorage.removeItem("product10")
    localStorage.removeItem("product11")
    localStorage.removeItem("product12")
    alert("Logged Out Successfuly!");
    window.location.href = "index.html";
};
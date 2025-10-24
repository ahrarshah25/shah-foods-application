console.log("JS Connected!");



function firstProductCart(){
    product = "Classic Beef Burger"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert("Classic Beef Burger Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

var userName = localStorage.getItem("userName" , userName);
var userEmail = localStorage.getItem("userEmail" , userEmail);

function userProduct(){
    var userFound = localStorage.getItem("userFound" , "true")
    if(userFound === "true"){
        window.location.href = "checkout.html"
    }else{
        alert("Please Login To Your Account First");
        window.location.href = "login.html"
    }
}

// function userProduct(){
//     var userOrderID = Math.floor(Math.random()*15000000+130)
//     var userFound = localStorage.getItem("userFound" , "true")
//     if(userFound === "true"){
//         var userAddress = prompt("Type Your Address");
//         var userNumber = prompt("Type Your Contact Number");
//         if(userAddress === "" && userNumber === ""){
//             alert("Please Type Your Address And Contact Number")
//         }else{
//             localStorage.setItem("userAddress" , userAddress);
//             localStorage.setItem("userNumber" , userNumber);
//             alert("Your Order Have Been Place Succesfuly!\nYour Data Is\nName: " + userName +"\nEmail: " + userEmail + "\nAddress: " + userAddress + "\nContact Number: " + userNumber + "\nPayment Method (Default): COD (Cash On Delivery).\nOrder Id: " + userOrderID)
//         }
//     }else{
//         alert("Please Login To Your Account First");
//         window.location.href = "login.html"
//     }
// };

function secondProductCart(){
    product = "Cheese Loaded Pizza"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function thirdProductCart(){
    product = "Creamy Alfredo Pasta"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function fourthProductCart(){
    product = "Grilled Chicken Sandwich"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function fifthProductCart(){
    product = "Hyderabadi Biryani"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function sixthProductCart(){
    product = "Chicken Tikka"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function seventhProductCart(){
    product = "Crispy Fries"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function eighthProductCart(){
    product = "Zinger Wrap"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function ninthProductCart(){
    product = "Chicken Nuggets"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function tenthProductCart(){
    product = "Chocolate Shake"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function eleventhProductCart(){
    product = "Vanilla Ice Cream"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function twelfthProductCart(){
    product = "Chocolate Brownie"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product + " Added To Cart Successfuly!")
    localStorage.setItem("product" , product);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

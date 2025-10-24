console.log("JS Connected!");



function firstProductCart(){
    product1 = "Classic Beef Burger"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert("Classic Beef Burger Added To Cart Successfuly!")
    localStorage.setItem("product1" , product1);
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
    product2 = "Cheese Loaded Pizza"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product2 + " Added To Cart Successfuly!")
    localStorage.setItem("product2" , product2);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function thirdProductCart(){
    product3 = "Creamy Alfredo Pasta"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product3 + " Added To Cart Successfuly!")
    localStorage.setItem("product3" , product3);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function fourthProductCart(){
    product4 = "Grilled Chicken Sandwich"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product4 + " Added To Cart Successfuly!")
    localStorage.setItem("product4" , product4);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function fifthProductCart(){
    product5 = "Hyderabadi Biryani"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product5 + " Added To Cart Successfuly!")
    localStorage.setItem("product5" , product5);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function sixthProductCart(){
    product6 = "Chicken Tikka"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product6 + " Added To Cart Successfuly!")
    localStorage.setItem("product6" , product6);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function seventhProductCart(){
    product7 = "Crispy Fries"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product7 + " Added To Cart Successfuly!")
    localStorage.setItem("product7" , product7);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function eighthProductCart(){
    product8 = "Zinger Wrap"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product8 + " Added To Cart Successfuly!")
    localStorage.setItem("product8" , product8);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function ninthProductCart(){
    product9 = "Chicken Nuggets"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product9 + " Added To Cart Successfuly!")
    localStorage.setItem("product9" , product9);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function tenthProductCart(){
    product10 = "Chocolate Shake"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product10 + " Added To Cart Successfuly!")
    localStorage.setItem("product10" , product10);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function eleventhProductCart(){
    product11 = "Vanilla Ice Cream"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product11 + " Added To Cart Successfuly!")
    localStorage.setItem("product11" , product11);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

function twelfthProductCart(){
    product12 = "Chocolate Brownie"
    var userFound = localStorage.getItem("userFound" , "true");

if(userFound === "true"){

    alert(product12 + " Added To Cart Successfuly!")
    localStorage.setItem("product12" , product12);
}else{
    alert("Please Login To Your Account First!")
    window.location.href = "login.html"
}
};

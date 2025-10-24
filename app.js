console.log("JS Connected!");

function userLogin(){
    window.location.href = "login.html"
};


function contactForm(){
    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userMessage = document.getElementById("message").value.trim();

    if(userEmail === "" && userName === "" && userMessage === ""){
        alert("Please Fill All The Fields!")
        return;
    }else{
        alert("Your Message Have Been Sent Successfuly");
    }
}

function orderNow(){
    window.location.href = "shop.html"
};
var userName = localStorage.getItem("userName" , userName)
var modalWelcome = document.getElementById("modalWelcome").innerText = "Welcome, "+ userName;
var userModalMessage = document.getElementById("userModalMessage").innerText = "Welcome " + userName + " To Shah Foods!\nEnjoy using our website and if you face any problem contact us using contact Tab on Navbar.\nThank You!"

var sendNotification = document.getElementById("sendNotification");
var userFound = localStorage.getItem("userFound" , "true");
// var openModal = document.getElementById("openModal");
if(userFound){
    document.getElementById("sendNotification").innerText = "1";
};

// // var notificationSeen = localStorage.setItem("notificationSeen" , "false")
// if(notificationSeen === "false"){
//     document.getElementById("sendNotification").innerText = "10";
// }
document.addEventListener("DOMContentLoaded",function(){
    const user = JSON.parse(localStorage.getItem("user"));
  if (user==undefined || user.accessToken==undefined) {
    window.location.href="./index.html";
  }
});
let nameField=document.getElementById("name-field");
let emailField=document.getElementById("email-field");
let passwordField=document.getElementById("password-field");

let data=JSON.parse(localStorage.getItem("user"));
nameField.innerText=`Full Name : ${data.name}`;
emailField.innerText=`Email : ${data.email}`;
passwordField.innerText=`Password : ${data.password}`;

let logoutButton=document.getElementById("logout-btn");
    logoutButton.addEventListener("click",function(){
    localStorage.removeItem("user");
    window.location.href="./index.html";
});

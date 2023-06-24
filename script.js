

document.addEventListener("DOMContentLoaded",function(){
const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    window.location.href="./profile.html";
  }
});

const signupButton=document.getElementById("signup-btn");
signupButton.addEventListener("click",saveData);
function saveData(event){
    event.preventDefault();
let nameInput=document.getElementById("name-input").value.trim();
let email=document.getElementById("email").value.trim();
let password=document.getElementById("password1").value.trim();
let passwordConfirm=document.getElementById("password2").value.trim();
let warning=document.getElementById("warning");
    if(nameInput!="" && email!="" && password!="" && passwordConfirm!=""){
        if(password==passwordConfirm){
            warning.innerText="Successfully Signed Up!";
            warning.style.color="green";
            let user={};
            user.name=nameInput;
            user.email=email;
            user.password=password;
            user.passwordConfirm=passwordConfirm;
            user.accessToken=generateAccessToken()
            localStorage.setItem("user", JSON.stringify(user));
            setTimeout(function() {
                window.location.href="./profile.html"
              }, 2000);
        }
        else{
            warning.innerText="Error : Password mismatch!";
            warning.style.color="red";
        }
    }
    else{
        warning.innerText="Error : All the Fields are mandatory";
        warning.style.color="red";
    }
}


function generateAccessToken() {
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 16; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }
const firstName = document.querySelector(".name");
const lastName= document.querySelector(".last__name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit__button");
const form = document.querySelector(".form");
const validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;


//Events: 
//verify fields when we press submit button

submit.addEventListener("click",(e)=>{
   
    if (firstName.value.length < 4 ||
        firstName.value.length == 0 ||
        firstName.value.length > 20) {
        document.querySelector(".error-name").classList.remove("hidden");
        e.preventDefault();   
    }
    if (lastName.value.length == 0){
        document.querySelector(".error-lastname").classList.remove("hidden");
        e.preventDefault();
    }
    if (validarEmail.test(email.value) == false) {
        document.querySelector(".error-email").classList.remove("hidden");
        e.preventDefault();
     }
    if (password.value.length == 0){
        document.querySelector(".error-password").classList.remove("hidden");
        e.preventDefault();
    }
});

//Clean the error in fields when we press again to correct it:

form.addEventListener("click",(e)=> {
    if (e.target.className === ("name")) {
        document.querySelector(".error-name").classList.add("hidden");   
    };
    if (e.target.className === ("email"))  {
        document.querySelector(".error-email").classList.add("hidden");
    };
    if (e.target.className === ("last__name")) {
       document.querySelector(".error-lastname").classList.add("hidden");
    };
    if (e.target.className === ("password")) {  
       document.querySelector(".error-password").classList.add("hidden");
    }});



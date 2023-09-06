// const loginForm =document.querySelector("#login");
// const createAccount = document.querySelector("#createAccount")

// document.addEventListener("DOMContentLoaded", ()=> {
//   createAccount.classList.add("form-hidden");
 
// });

// document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//   e.preventDefault();
//   loginForm.classList.toggle("form-hidden");
//   createAccount.classList.toggle("form-hidden")
// });

// document.querySelector("#linkLogin").addEventListener("click", e => {
//   e.preventDefault();
//   loginForm.classList.toggle("form-hidden");
//   createAccount.classList.toggle("form-hidden")
// });

const form = document.getElementById("createAccount");
// const fullName = document.getElementById("fullName");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword= document.getElementById("confirmPassword");

let fullName;
let email;
let password;
let confirmPassword;
let isAgreed;
let signup;
document.getElementById("fullName").addEventListener('blur',(e)=>{
  fullName = e.target.value
  if (!fullName) {
      document.querySelector(".form-input-error-message-fullname").innerHTML=
      "full name is not entry"
  }else {
    document.querySelector(".form-input-error-message-fullname").innerHTML=
    null
  }
}) 

document.getElementById("email").addEventListener('blur',(e)=>{
  email=e.target.value
  if (!email) {
      document.querySelector(".form-input-error-message-email").innerHTML=
      "email is not entry"
  }else{
    let regexFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexFormat)){
      document.querySelector(".form-input-error-message-email").innerHTML=
      "email format is wrong"
    }
    else{
      document.querySelector(".form-input-error-message-email").innerHTML=
    null
    }
  
  }
}) 

document.getElementById("password").addEventListener('blur',(e)=>{
  password=e.target.value
  if(!password){
    document.querySelector(".form-input-error-message-password").innerHTML=
    "password is not entry"
  }else{
    let regexFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!password.match(regexFormat)){
      document.querySelector(".form-input-error-message-password").innerHTML=
      "password format is wrong"
    }else{
      document.querySelector(".form-input-error-message-password").innerHTML=
      null
    }
  }
})



document.getElementById("confirmPassword").addEventListener('blur',(e)=>{
  confirmPassword=e.target.value
  if(!confirmPassword){
    document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
    "confirmPassword is invalid"
  }else if(confirmPassword!==password){
      document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
      "confirmPassword does not match"
    }
    else{
      document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
      null
    }
  })

// document.getElementById("confirmPassword").addEventListener('',(e)=>{
//   confirmPassword=e.target.value
//   if(!confirmPassword){
//     document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
//     "confirmPassword is"
//   }
//   else{
//     if(confirmPassword!==password){
//       document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
//       "confirmPassword does not match"
//     }else{
//       document.querySelector(".form-input-error-message-confirmPassword").innerHTML=
//       null
//     }
//   }
// })

document.getElementById("agree").addEventListener('change',(e)=>{
    isAgreed =e.target.checked;
})

// document.getElementById('createAccount').addEventListener('submit',(e)=>{
//   e.preventDefault();
//   // console.log(fullName,email,password,confirmPassword,isAgreed)
// })

// document.getElementById("signup-btn").addEventListener("click",(e)=>{
//   signup = e.target.value
//   e.preventDefault();
//   if(!fullName || !email || !password || !confirmPassword){
//     document.querySelector(".form-input-error-message-continue").innerHTML=
//     "must fill all  entry"
//   }
//   else{
//     document.querySelector(".form-input-error-message-continue").innerHTML=
//     null
//   }

//   if( fullName && email && password && password === confirmPassword && !isAgreed)
//   {
//     document.querySelector(".form-input-error-message-continue").innerHTML=
//     "terms and conditions is necessary"
//   }else {
//     document.querySelector(".form-input-error-message-continue").innerHTML=
//     null
//   }

//    })

// document.getElementById("createAccount").addEventListener("change", e => {
//   e.preventDefault()
//   if(!fullName || !email || !password || password !== confirmPassword)
// {
//  document.getElementById("signup-btn").disabled = true;

// }else {
//   document.getElementById("signup-btn").removeAttribute("disabled")
// }

// console.log("changs")
// })


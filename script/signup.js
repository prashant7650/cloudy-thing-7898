var data =JSON.parse(localStorage.getItem("userarr")) ||[];
let btn=document.getElementById("signup_button");

const name = document.getElementById("name");
var mob = document.getElementById("mob");
var email=document.getElementById("email");
var password=document.getElementById("pass");
console.log(name.value);
btn.addEventListener("click", ()=>{
    console.log(name.value);
    if(name.value== "" || mob.value=="" || email.value =="" || password.value ==""){
        alert("Please fill in the empty fields");
    }

else {
       let obj ={
                  name:name.value,
                  mob:mob.value,
                  mail:email.value,
                  password:password.value
                 };

        data.push(obj);
        localStorage.setItem("userarr",JSON.stringify(data));
        alert("signed up successfully");
    window.location.href="./profile.html"
     }
});

// function sigup


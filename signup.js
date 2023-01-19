var data =JSON.parse(localStorage.getItem("userarr")) ||[];
let btn=document.getElementById("signup_button")

var name=document.getElementById("name"); 
var mob=document.getElementById("mob");
var email=document.getElementById("email");
var password=document.getElementById("pass");

btn.addEventListener("click",sigup);

function sigup(){
    // console.log("inside fun")
    

    if(name.value== "" || mob.value=="" || email.value =="" || password.value ==""){
        alert("Please fill in the empty fields");
    }

else {
       var obj ={
                  name:name.value,
                  mob:mob.value,
                  mail:email.value,
                  password:password.value
                 };

        data.push(obj);
        
        localStorage.setItem("userarr",JSON.stringify(data));
   

        alert("signed up successfully");

        // mob.value="";
        // email.value="";
        // pass.value="";
        // name.value="";

    window.location.href="./profile.html"
     }
}


var userData =JSON.parse(localStorage.getItem("loginobj"));

let mob=document.getElementById("mob");
let password=document.getElementById("pass");

var btn=document.getElementById("signup_button1");
btn.addEventListener("click",login)

function login(){
    userData.forEach((element,index)=>{
        // const phoneNumberExist=mob.value.match(/^\d{10}$/g);
        

        if(mob.value==element.mob&&password.value==element.password){
            window.location.href="./otp.html";
        }else if(password.value== "" || mob.value==""){
            alert("Please fill in the empty fields");
        }else if(mob.value!==element.mob&&password.value!==element.password){
            window.location.href="./signup.html"
        }
});
        
}

let admin= document.getElementById("admin")
admin.addEventListener("click", ()=>{
    self.location="adminlogin.html"
})
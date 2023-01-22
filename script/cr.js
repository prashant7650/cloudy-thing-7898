window.addEventListener("blur",()=>{
    document.title="come back 😤"
})

let crJs= localStorage.getItem("x")

let fa = document.querySelector(".fa")
fa.addEventListener("click", ()=>{
if(crJs){
  alert("want to logout ?")
  localStorage.removeItem('x')
  window.location.reload()
}
 
})
  // checking if logged in or not
  
  let see = document.querySelector("#signIn_signUp>div")
  console.log(see);
  if(crJs){
    see.innerHTML=""
  }
  document.getElementById("cart").addEventListener("click", ()=>{
if(crJs){
  self.location="cartPage.html"
}else{
  alert("login to see your products")
}
  })
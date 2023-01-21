let cartDataArray = JSON.parse(localStorage.getItem("objarrayforBasket"))||[]
localStorage.setItem("item", JSON.stringify(cartDataArray))
// displayTable section
let subtotal = document.querySelector("#subtotal")

let total = document.querySelector("#total")

let promo = document.querySelector('#promoDiv>button');


displayTable(cartDataArray)
function displayTable(cartDataArray) {
  document.querySelector("tbody").innerHTML = ""
  cartDataArray.forEach(function (element, index) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let img = document.createElement("img")
    img.id = "fitThisImgInCart"
    img.setAttribute("src", element.image)

    let td2 = document.createElement("td")
    td2.innerHTML = `${element.name}`
    td2.style.textAlign = "left"

    let td3 = document.createElement("td")
    td3.innerText = "$"+element.price

    let td5 = document.createElement("td")
    td5.className = "subtotalFromDocument"
    let totalPrice = function finding(element) {
      let price = +element.price * 1;
      //   console.log(price)
      return price
    }
    td5.innerHTML = "$" +totalPrice(element) + "<br>"

    let td4 = document.createElement("td")
    let selectquantity = document.createElement("select")
    selectquantity.id = "cartSelect-tag"
    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("option")
      option.value = i
      option.innerText = i
      selectquantity.append(option)
    }
    selectquantity.addEventListener("change", function () {
      //   console.log(+selectquantity.value)
      if (eval(selectquantity.value >= 1)) {
        let total1=eval(element.price * selectquantity.value)
        td5.innerText ="$"+total1.toFixed(2)
      }
      let subtotalFromDocument = document.querySelectorAll(
        ".subtotalFromDocument"
      )
      console.log(subtotalFromDocument[0].innerText)

      let sumOfAll = 0
      for (let i = 0; i < subtotalFromDocument.length; i++) {
        //  console.log(+subtotalFromDocument[0].innerText);
        let x = subtotalFromDocument[i].innerText
        let y = "";
        for(let j = 1; j < x.length;j++){
          y += x[j]
        }
        sumOfAll += +y
        // console.log(sumOfAll)
      }
      
      
      subtotal.innerText = "$ " + sumOfAll
      total.innerText = "$ " + sumOfAll
    })

    let td6 = document.createElement("td")
    td6.innerText = "Remove"
    td6.className = "hover"
    td6.style.color = "rgb(74, 166, 197)"
    td6.addEventListener("click", function () {
      del(element, index)
    })

    // appending section

    td1.append(img)
    td4.append(selectquantity)
    tr.append(td1, td2, td3, td4, td5, td6)
    document.querySelector("tbody").append(tr)
  })
}

function del(element, index) {
  cartDataArray.splice(index, 1)
  let newTotal = "";
  for(let i = 1; i< total.innerText.length;i++){
    newTotal += total.innerText[i];
  }
  total.innerText ="$" +(eval(newTotal-element.price))
  let newSubTotal = "";
  for(let i = 1; i< subtotal.innerText.length;i++){
    newSubTotal += subtotal.innerText[i];
  }
  total.innerText ="$" +(eval(newTotal-element.price))
  subtotal.innerText ="$" +(eval(newSubTotal-element.price))
  localStorage.setItem("objarrayforBasket", JSON.stringify(cartDataArray))
  displayTable(cartDataArray)
  window.location.reload()
}
if (subtotal.innerText == "") {
  let subtotalFromDocument = document.querySelectorAll(".subtotalFromDocument")

  let sumOfAll = 0
  for (let i = 0; i < subtotalFromDocument.length; i++) {
    //  console.log(+subtotalFromDocument[0].innerText);
    let x = subtotalFromDocument[i].innerText
    let y = "";
    for(let j = 1; j < x.length;j++){
      y += x[j]
    }
    sumOfAll += +y
    // console.log(sumOfAll)
  }
  sumOfAll =  sumOfAll.toFixed(2)
  subtotal.innerText = "$ " + sumOfAll
  total.innerHTML = "$ "+ sumOfAll
}

let checkout = document.querySelector("#productSectionPayment>div>ul>button:nth-child(5)");

promo.addEventListener("click",function(){
  let promoCode = document.querySelector('#promoDiv>input');
  if(promoCode.value=="masai30" && localStorage.getItem("promo")!="done"){
    let priceAfterPromo=""; 
    for(let i = 1; i <total.innerText.length;i++){
      priceAfterPromo += total.innerText[i];
    };
    priceAfterPromo = (eval(priceAfterPromo- priceAfterPromo*30/100)).toFixed(2)
    total.innerText="$ "+(priceAfterPromo)
    alert("Applied")
    localStorage.setItem("promo","done")
  }else if(promoCode.value != "masai30"){
    alert("Enter a Valid Promo Code")
  }else if(localStorage.getItem("promo")=="done"){
    alert("Already Applied")
  }
})
checkout.addEventListener("click",checkoutFunction);

function checkoutFunction(){
  localStorage.setItem("promo","");
  localStorage.setItem("total",total.innerText);
  localStorage.setItem("subtotal",subtotal.innerText);
  window.location.reload()
  location.href = "payment.html"
}
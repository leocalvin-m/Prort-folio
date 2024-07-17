console.log("HI baby")
const h1 = document.querySelector("h1")
const span = Array.from(document.querySelectorAll("h1 .hidden"))
 const cursor = document.querySelector(".cursor")
console.log(span.length)
 setTimeout(() => {
     
 },1000)
const typeEffect =  function () { 


    span.forEach(function (value,index) {
        console.log();
        setTimeout(() => {
            value.classList.remove("hidden") 
            cursor.classList.toggle(".hidden")
        },250*index+1)
        
        
    })

}

const untype = function () {
      span.forEach(function (value,index,arr) {
     setTimeout(() => {
         arr[arr.length - 1 - index].classList.add("hidden")  
         cursor.classList.toggle(".hidden")
     },250*index+1)
     
     
 })
 }
setInterval(() => {

    typeEffect()
    setTimeout(untype,2750)
}
    , 5500)

    
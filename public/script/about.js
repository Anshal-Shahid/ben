const navbtn = document.querySelector(".menu")
const dropdownMenu = document.querySelector(".nav");
const cross = document.querySelector(".cross")
let text = document.querySelector(".hero-text h1")


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("hide")
    cross.classList.toggle("hide")
    // dropdownMenu.classList.toggle("hide")

    gsap.fromTo(dropdownMenu, {
        display:"block",
        x: 50
    }, {
        x: 0,
        duration: .3,
        opacity: 1
    })
})
cross.addEventListener("click", () => {
    navbtn.classList.toggle("hide")
    cross.classList.toggle("hide")
   gsap.fromTo(dropdownMenu, {
       x: 0
    }, {
        x: 50,
        display:"none",

        duration: .3,
        opacity: 0
    })
})


// nav links
const home=document.querySelector(".li-home")
const about=document.querySelector(".li-about")
const contact=document.querySelector(".li-contact")
const speaking=document.querySelector(".li-speaking")
const books=document.querySelector(".li-books")
const blog=document.querySelector(".li-blog")
const coaching=document.querySelector(".li-coaching")


home.addEventListener("click",()=>{
    
    window.location.href = "/"
})
books.addEventListener("click",()=>{
    
    window.location.href = "/books"
})
about.addEventListener("click",()=>{
    
    window.location.href = "/about"
})
// blog.addEventListener("click",()=>{
    
//     window.location.href = "#"
// })
contact.addEventListener("click",()=>{
    
    window.location.href = "/contact"
})
coaching.addEventListener("click",()=>{
    
    window.location.href = "/coaching"
})
speaking.addEventListener("click",()=>{
    
    window.location.href = "/speaking"
})
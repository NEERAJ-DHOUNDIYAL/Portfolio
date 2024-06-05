const hamburger=document.querySelector(".hamburger");
const bar1=document.querySelector(".bar1");
const bar2=document.querySelector(".bar2");
const bar3=document.querySelector(".bar3");
const navlink=document.querySelectorAll(".nav-link");

const navmenu=document.querySelector(".navmenu");

// hamburger.addEventListener("click",()=>{
// hamburger.classList.toggle("active");  
//     navmenu.classList.toggle("active");
// })
hamburger.addEventListener('click',()=>{
    bar1.classList.toggle("active1");
    bar2.classList.toggle("active2")
    bar3.classList.toggle("active3")
    navmenu.classList.toggle("active");
})
navlink.forEach(n=>n.addEventListener("click",()=>{
    bar1.classList.remove("active1");
    bar2.classList.remove("active2")
    bar3.classList.remove("active3")
    navmenu.classList.remove("active");
}))


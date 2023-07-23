//ต้องเป็น Class ที่มีอยู่จริงๆใน Component เท่านั้น


const links = document.querySelector('.links');
const menuOpen = document.querySelector('.menu-open');
const menuClose  = document.querySelector('.menu-close');
const bacdDrop = document.querySelector('.backdrop');



menuOpen.addEventListener("click",()=>{
    links.classList.add("active")
    menuOpen.classList.add("active")
    menuClose.classList.add("active")
    bacdDrop.classList.add("active")
});


menuClose.addEventListener("click",()=>{
    links.classList.remove("active")
    menuOpen.classList.remove("active")
    menuClose.classList.remove("active")
    bacdDrop.classList.remove("active")
});
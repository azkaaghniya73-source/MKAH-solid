const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");
overlay.classList.toggle("active");

});

closeMenu.addEventListener("click",()=>{

nav.classList.remove("active");
overlay.classList.remove("active");

});

overlay.addEventListener("click",()=>{

nav.classList.remove("active");
overlay.classList.remove("active");

});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Warna navbar
    if(currentScroll > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    // Paling atas selalu tampil
    if(currentScroll <= 0){

        header.classList.remove("hide");

        lastScroll = 0;

        return;

    }

    // Scroll ke bawah -> sembunyikan
    if(currentScroll > lastScroll){

        header.classList.add("hide");

    }

    // Scroll ke atas -> tampilkan
    else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");
overlay.classList.remove("active");

});

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},700);

});
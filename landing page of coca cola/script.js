gsap.from(".nav" ,{
    y:-100,
    duration:3,
    delay:1,
    // stagger:0.3
})

var crsr = document.querySelector(".cursor");
var nav = document.querySelectorAll(".nav a");

document.addEventListener("mousemove" , function(dets){

    gsap.to(crsr,{
        x:dets.clientX,
        y:dets.clientY,
        duration:.2,
        ease:Expo,   
    })
})

nav.forEach(function(elem){
    elem.addEventListener("mouseenter" , function() {
        crsr.style.width = "50px"
        crsr.style.height = "50px"
        crsr.style.display = "block"
    })
   
})
nav.forEach(function(elem){
    elem.addEventListener("mouseleave" , function() {
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.display = "block"
    })
})
gsap.from(".nav-prt2 img",{
    y:-700,
    duration:3,
    delay:1,

})
gsap.from(".np1",{
    x:-500,
    duration:3,
    delay:1,

})
gsap.from(".np3",{
    x:500,
    duration:3,
    delay:1,

})
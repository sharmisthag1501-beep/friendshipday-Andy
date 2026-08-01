// ======================================
// THE BEST THING ACCENTURE EVER GAVE ME
// Andy Edition
// ======================================

// ----------------------------
// Smooth Navigation
// ----------------------------

const startBtn = document.getElementById("startJourney");

if(startBtn){

startBtn.addEventListener("click",()=>{

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

});

}

const memoryBtn=document.getElementById("memoryBtn");

if(memoryBtn){

memoryBtn.addEventListener("click",()=>{

document.getElementById("journey").scrollIntoView({

behavior:"smooth"

});

});

}

const endingBtn=document.getElementById("endingBtn");

if(endingBtn){

endingBtn.addEventListener("click",()=>{

document.getElementById("ending").scrollIntoView({

behavior:"smooth"

});

});

}

// ----------------------------
// Scroll Reveal Animation
// ----------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

});

document.querySelectorAll(

".photo,.quote,.letter-card,.ending-card,.section-title"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ----------------------------
// Floating Photo Animation
// ----------------------------

document.querySelectorAll(".photo").forEach((photo,index)=>{

photo.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:4200+(index*250),

iterations:Infinity,

easing:"ease-in-out"

});

});

// ----------------------------
// Twinkling Stars
// ----------------------------

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(2+Math.random()*4)+"s";

star.style.opacity=Math.random();

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},6000);

}

setInterval(createStar,350);

// ----------------------------
// CSS for Stars
// ----------------------------

const style=document.createElement("style");

style.innerHTML=`

.star{

position:fixed;

width:4px;

height:4px;

border-radius:50%;

background:white;

pointer-events:none;

z-index:-1;

box-shadow:

0 0 10px white,

0 0 20px #d8b4fe,

0 0 35px #c084fc;

animation:twinkle ease-in-out infinite;

}

@keyframes twinkle{

0%{

transform:scale(.2);

opacity:0;

}

50%{

transform:scale(1);

opacity:1;

}

100%{

transform:scale(.2);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ----------------------------
// Typewriter Effect
// ----------------------------

const reveal=document.querySelector(".reveal h2");

if(reveal){

const original=reveal.textContent;

reveal.textContent="";

let i=0;

function typing(){

if(i<original.length){

reveal.textContent+=original.charAt(i);

i++;

setTimeout(typing,140);

}

}

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typing();

revealObserver.disconnect();

}

});

},

{

threshold:0.7

});

revealObserver.observe(reveal);

}

// ----------------------------
// Console Message
// ----------------------------

console.log("The Best Thing Accenture Ever Gave Me 💜");

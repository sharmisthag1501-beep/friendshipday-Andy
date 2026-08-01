// ===============================
// Friendship Day Website
// For Andy ❤️
// ===============================

const openBtn = document.getElementById("openBtn");
const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const musicSection = document.getElementById("musicSection");
const endSection = document.getElementById("endSection");

openBtn.addEventListener("click", () => {

    openBtn.innerHTML = "💖 Opening...";

    setTimeout(() => {

        letterSection.classList.remove("hidden");
        gallerySection.classList.remove("hidden");
        musicSection.classList.remove("hidden");
        endSection.classList.remove("hidden");

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 800);

});


// ===============================
// Floating Hearts
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💖","💕","💗","🤍","🌸"][
        Math.floor(Math.random()*5)
    ];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,350);


// ===============================
// Music
// ===============================


// ===============================
// Final Surprise
// ===============================

const surpriseBtn=document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",()=>{

    launchConfetti();

    setTimeout(()=>{

        alert(`💖

Andy,

Thank you for being exactly who you are.

Never change.

The world is brighter because you're in it.

Happy Friendship Day!

Love,
Sharmistha 🤍`);

    },700);

});


// ===============================
// Confetti
// ===============================

function launchConfetti(){

    for(let i=0;i<180;i++){

        const item=document.createElement("div");

        item.innerHTML=[
            "💖",
            "💕",
            "🌸",
            "✨",
            "🎀",
            "🤍"
        ][Math.floor(Math.random()*6)];

        item.style.position="fixed";

        item.style.left=Math.random()*100+"vw";

        item.style.top=Math.random()*100+"vh";

        item.style.fontSize=
        (18+Math.random()*25)+"px";

        item.style.pointerEvents="none";

        item.style.zIndex="9999";

        document.body.appendChild(item);

        item.animate([

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },

            {
                transform:"translateY(-200px) rotate(360deg)",
                opacity:0
            }

        ],{

            duration:2500,

            easing:"ease-out"

        });

        setTimeout(()=>{

            item.remove();

        },2500);

    }

}


// ===============================
// Welcome Animation
// ===============================

window.onload=()=>{

    document.querySelector(".glass-card").animate([

        {
            opacity:0,
            transform:"translateY(80px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

};
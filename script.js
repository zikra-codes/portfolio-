// =======================
// Loading Animation
// =======================


window.addEventListener("load",()=>{

    document.querySelector(".loader").style.display="none";

});





// =======================
// Typing Animation
// =======================


const words=[

"Front-End Developer",

"Web Designer",

"AI & DS Student",

"Creative Developer"

];


let wordIndex=0;

let charIndex=0;

let typingElement=document.getElementById("typing");



function typeEffect(){


    if(charIndex < words[wordIndex].length){


        typingElement.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);


    }

    else{


        setTimeout(deleteEffect,1200);


    }


}





function deleteEffect(){


    if(charIndex > 0){


        typingElement.textContent =
        words[wordIndex].substring(0,charIndex-1);


        charIndex--;


        setTimeout(deleteEffect,50);


    }


    else{


        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex=0;

        }


        setTimeout(typeEffect,300);


    }


}



typeEffect();








// =======================
// Custom Cursor
// =======================



let cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});









// =======================
// Scroll To Top Button
// =======================



let topButton=document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


if(window.scrollY>400){


topButton.style.display="block";


}

else{


topButton.style.display="none";


}



});




topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});









// =======================
// Particle Background
// =======================



const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");



canvas.width=window.innerWidth;

canvas.height=window.innerHeight;




let particles=[];



for(let i=0;i<120;i++){


particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*3,

speedX:(Math.random()-0.5),

speedY:(Math.random()-0.5)

});


}




function animateParticles(){



ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);





particles.forEach(p=>{


ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



ctx.fillStyle="#00ffff";


ctx.fill();





p.x+=p.speedX;

p.y+=p.speedY;




if(
p.x<0 ||
p.x>canvas.width
)

p.speedX*=-1;



if(
p.y<0 ||
p.y>canvas.height
)

p.speedY*=-1;



});



requestAnimationFrame(animateParticles);



}



animateParticles();






// =======================
// Resize Canvas
// =======================


window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});
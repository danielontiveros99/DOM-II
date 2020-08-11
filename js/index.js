// Your code goes here
// import { gsap } from 'gsap';


let photos = document.querySelectorAll("body img");
photos.forEach((x)=>{
    x.addEventListener('mouseenter', (e) =>{
        e.stopPropagation();
        x.style.boxShadow = '5px 5px 30px black'
        x.style.border = '5rem';
        });
        x.addEventListener('mouseleave', (e =>{
            e.stopPropagation();
            x.style.boxShadow = ''
        }));
});

let navItems = document.querySelectorAll('nav a')
navItems.forEach((x)=>{
    x.addEventListener('mouseover', (e)=> {
        e.stopPropagation;
        x.style.textDecoration = 'underline black';
    });
    x.addEventListener('mouseout', (e)=> {
        e.stopPropagation;
        x.style.textDecoration = '';
    });
});

let titles = document.querySelectorAll('body h2')
titles.forEach((x)=>{
    x.addEventListener('click', (e)=> {
        e.stopPropagation;
        x.style.color = 'blue';
    });
    x.addEventListener('contextmenu', (e)=> {
        e.stopPropagation;
        x.style.color = 'black';
    });
});

let logo = document.querySelector('.logo-heading')
    logo.addEventListener('dblclick', (e)=> {
        e.stopPropagation;
        logo.style.letterSpacing = "15px";
    });
    logo.addEventListener('click', (e)=> {
        e.stopPropagation;
        logo.style.letterSpacing = "0px";
    });


let footer = document.querySelector('.footer');
window.addEventListener('resize', (e) => {
    footer.style.backgroundColor = 'black'
});

let p = document.querySelectorAll('body p')
p.forEach((x)=>{
    document.addEventListener('mousedown', (e)=> {
        e.stopPropagation;
        x.style.color = 'green';
    });
    document.addEventListener('mouseup', (e)=> {
        e.stopPropagation;
        x.style.color = 'black';
    });
});

document.querySelector(".nav").addEventListener("click", function(event){
    event.preventDefault()
  });
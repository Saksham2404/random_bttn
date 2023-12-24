const a = document.querySelector('.main-div');
const b = document.querySelector('.que');
const c = document.querySelector('.Yes');
const e = document.querySelector('.image')
const d = document.querySelector('.No');
// var vdo = document.querySelector('.vdo');
const wrapperRect = a.getBoundingClientRect();
const noBtnRect = d.getBoundingClientRect();
// c.addEventListener('click', () => {
//     b.innerHTML = 'Same here :) lesssgggoooooooooo';
// });
// c.addEventListener('click', () => {
//     b.innerHTML = 'Wanna create your best memories with me?';
// });
// c.addEventListener('click', () => {
//     e.style.display = 'block';
// });

// var display = 0;
// function show(){
//     if (display == 0){
//         vdo.style.display="block";
//         display = 1;

//     }
//     else{
//         vdo.style.display="none";
//         display=0;
//     }
// } 
d.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    d.style.left = i + 'px';
    d.style.top = j + 'px';
});
d.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    d.style.left = i + 'px';
    d.style.top = j + 'px';
});

function run(){
    let a=document.getElementById('selectv');
    let l=document.querySelector('.que');
    if(a.style.zIndex=='1'){
        a.style.zIndex='-1';
        a.pause();
        l.innerHTML='Wanna create your best memories with me?';
    }
    else{
        a.style.zIndex='1';
        a.play();
        l.innerHTML='Same here :) lesssgggoooooooooo';
    }
}
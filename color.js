const body=document.querySelector('body');
const arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// const div=document.querySelector('div');


function deyis(){
let say=0;
let s="#"
    while(say<6){
        let a=Math.floor(Math.random()*100)%16;
         s=s+arr[a];
         say++;
     }
     body.style.backgroundColor=s;
    //  div.textContent=s;
     
     // deyis2();
    }
    setInterval(deyis,1000)
// function deyis2(){
//     setTimeout(()=>{
//         deyis();
//     },2000)
// }
// deyis();
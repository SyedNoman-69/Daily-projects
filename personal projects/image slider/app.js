const srcs =[
    {
        id: 0,
        i: "https://images.unsplash.com/photo-1632203172046-004f674e9aac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 1,
        i: "https://images.unsplash.com/photo-1603148958287-469a8a487853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {   
        id: 2,
        i: "https://images.unsplash.com/photo-1603148959436-09e25fac0929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UlTmm2ZgtNsCsK0swYiru0Ds6wy1lWi0l66AmDJzc5P2Ao-Rro2vG6lDEKXHKedBwyE&usqp=CAU"
    },
    {
        id: 4,
        i: "https://wallpaperaccess.com/full/170249.jpg"
    }
]

const img = document.querySelector("img");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let cImg = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    showImg(cImg);
 });

function showImg (cImg){
    const item = srcs[cImg];
    img.src = item.i;
    console.log(item)
}

// next btn 
next.addEventListener('click', ()=>{
    cImg++;
    if(cImg > srcs.length - 1){
        cImg = 0;
    }
    showImg(cImg);
});

// prev btn

prev.addEventListener('click',()=>{
    cImg--;
    if(cImg < 0){
        cImg = srcs.length-1;
    }
    showImg(cImg);
})
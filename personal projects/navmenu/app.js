// Nav bar here

const bars = document.querySelector('.bars');
const cross = document.querySelector('.cross');
const menuItems = document.querySelector('.menu-items');

bars.addEventListener('click', ()=>{
    menuItems.classList.add('open');
    cross.classList.remove('none');
    bars.classList.add('none');
})
cross.addEventListener('click', ()=>{
    menuItems.classList.remove('open');
    bars.classList.remove('none');
    cross.classList.add('none');
});

// Slider Here
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

const img1 = document.querySelector(".hero-img");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let cImg = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    showImg(cImg);
 });

function showImg (cImg){
    const item = srcs[cImg];
    img1.src = item.i;
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

// CArousel Starts here

const arr = [
    {
        name:"Susan Doe",
        title:"Web Tech",
        quote: "Lorem ipsum dsadolor sit amet consectetur, adipisicing elit. Perspiciatis earum cupiditate porro et ducimus quos ipsum, voluptas tenetur fugit similique.",
        image:"https://images.unsplash.com/photo-1576607305978-148df0f72a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Tanya Doe",
        title:"Web Dev",
        quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum cupiditate porro et ducimus quos ipsum, voluptas tenetur fugit similique.",
        image:"https://images.unsplash.com/photo-1623513628147-479319fda620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Amanda Doe",
        title:"Tech Savvy",
        quote: "Lorem ipsum dolores sit amet consectetur, adipisicing elit. Perspiciatis earum cupiditate porro et ducimus quos ipsum, voluptas tenetur fugit similique.",
        image:"https://images.unsplash.com/photo-1569243355672-7e6bcb2bd5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
    
]
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".reviews-img");
const nam = document.querySelector(".name");
const jobTitle = document.querySelector(".job-title");
const quote = document.querySelector(".quote");

let currentItem = 0;

 window.addEventListener('DOMContentLoaded', ()=>{
    showPerson(currentItem);
 });

 function showPerson(person){
    const item = arr[person];
    img.src = item.image;
    jobTitle.textContent = item.title;
    quote.textContent = item.quote;
    nam.textContent = item.name;
};
// next
right.addEventListener('click', ()=>{
    currentItem++;
    if(currentItem > arr.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
left.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = arr.length - 1 ;
    }
    showPerson(currentItem);
})



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
const img = document.querySelector("img");
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



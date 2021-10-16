const open = document.querySelector('.open');
const close = document.querySelector('.close');
const ans = document.querySelector('.answer')

open.addEventListener('click',()=>{
    ans.classList.add('answer-open');
    open.classList.add('none');
    close.classList.remove('none');
})

close.addEventListener('click',()=>{
    ans.classList.remove('answer-open');
    open.classList.remove('none');
    close.classList.add('none');
})
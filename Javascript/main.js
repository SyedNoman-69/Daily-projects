var bodyel = document.querySelector('body');
var settingsPanel = document.querySelector('.floating_settings');
var setting = document.querySelector('.fa-cogs');
var lightTheme = document.querySelector('.fa-sun');
var darkTheme = document.querySelector('.fa-moon');
var headingTexts = document.querySelectorAll('h2');
var paraTexts = document.querySelectorAll('p');
var rootEl = document.documentElement;

setting.addEventListener('click', ()=>{
    settingsPanel.classList.toggle('displayed');
})
console.log(settingsPanel);

darkTheme.addEventListener('click', ()=>{
    bodyel.style.background = 'var(--dark_dark)';
    headingTexts.forEach(heading => {
        heading.style.color = 'white';
    });
    paraTexts.forEach(para =>{
        para.style.color = 'white';
    })
    rootEl.style.setProperty('--light_grey_header','#28293da2');
    rootEl.style.setProperty('--light_grey',' #28293D');
    rootEl.style.setProperty('--box_shadow','0 8px 32px 0 #3c3e6d');
})
console.log(bodyel);
console.log(rootEl);

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

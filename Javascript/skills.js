var percentage = [62, 93, 85, 73];
var filler = document.querySelectorAll(".filler");
for (let i = 0;  i < filler.length; i++) {
   filler[i].style.width = percentage[i]+'%';
}

// counter

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c<target){
        counter.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = target
        }
    }
    updateCounter()
})
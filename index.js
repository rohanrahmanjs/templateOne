const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');



menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    console.log(menu);
})



// hero section 
const catagory = ['Developer', 'Designer', 'Programmer'];
const pattient = document.getElementById('pattient');
let pos = 0;

setInterval(function () {
    pattient.textContent = catagory[pos]
    pos++;
    if (pos >= catagory.length) {
        pos = 0;
    }
}, 3000)







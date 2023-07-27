const icons = document.querySelectorAll('.food-icon');

//handle menu navbar
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})


//Handle section 1 icons 
let i = 1;
setInterval(() => {
    i++;
    const icon = document.querySelector('.section_1_icons .change');
    icon.classList.remove('change');
    //to go first icon when finish all icons
    if (i > icons.length) {
        i = 1;
        icons[0].classList.add('change')
    } else {
        icon.nextElementSibling.classList.add('change');
    }
}, 3000);


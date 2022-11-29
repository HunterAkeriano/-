const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');

function openMenu(){
    let nav = burger.classList.toggle('active');
    headerNav.classList.toggle('active');
    if(nav){
        document.body.style.overflow = 'hidden';
    }if(!nav){
        document.body.style.overflow = 'scroll';
    }
}

burger.addEventListener('click', openMenu);



const header = document.querySelector('.header-fix')
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY;
    if(scrollDistance >= 20){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
})
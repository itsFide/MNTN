let navItem = document.querySelectorAll('.item');
let line = document.querySelector('.page__nav-line-item');
navItem.forEach(function(event){
    event.addEventListener('click',function(ev){
        for (let index = 0; index < navItem.length; index++) {
            navItem[index].classList.remove('active');
            
        }
        event.classList.add('active');
        if(event.classList.contains('first-item')){
            line.style.top = '0';
        }
        if(event.classList.contains('second-item')){
            line.style.top = '15%';
        }
        if(event.classList.contains('three-item')){
            line.style.top = '33%';
        }
        if(event.classList.contains('four-item')){
            line.style.top = '53%';
        }
        if(event.classList.contains('five-item')){
            line.style.top = '75%';
        }
    })
})
// Сколл
$('#navBtn0').on('click',function(){
    let top = $('#intro').offset().top - 150;
    $('html,body').animate({
        scrollTop: top
    },800);
});

$('#navBtn1').on('click',function(){
    let top = $('#started').offset().top - 150;
    $('html,body').animate({
        scrollTop: top
    },800);
});
$('#navBtn2').on('click',function(){
    let top = $('#hiking').offset().top - 150;
    $('html,body').animate({
        scrollTop: top
    },800);
});
$('#navBtn3').on('click',function(){
    let top = $('#key').offset().top - 150;
    $('html,body').animate({
        scrollTop: top
    },800);
});
$('#navBtn4').on('click',function(){
    let top = $('#footer').offset().top;
    $('html,body').animate({
        scrollTop: top
    },800);
});
// Анимация при скролле
let animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll)
    function animOnScroll(el){
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            let animItemHeight = animItem.offsetHeight;
            let animItemOffset = offset(animItem).top;
            let animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            } else{
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el){
        let rect = el.getBoundingClientRect(),
        scrolLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrolTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top + scrolTop, left: rect.left + screenLeft}
    }
    setTimeout(()=>{
        animOnScroll()
    },200)

}
// Бургер
let burger = document.querySelector('.burger');
let burgerItem = document.querySelectorAll('.burger__item');
let mobileMenu = document.querySelector('.mobile__menu');
burgerItem.forEach(function(event){
    burger.addEventListener('click',function(){
        event.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})
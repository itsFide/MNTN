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
            line.style.top = '20%';
        }
        if(event.classList.contains('three-item')){
            line.style.top = '45%';
        }
        if(event.classList.contains('four-item')){
            line.style.top = '70%';
        }
    })
})
const portfolioSwiper = new Swiper('.portfolio-swiper', {
    speed: 400,
    slidesPerView: 1,
    loop: true,

});

const dealsSwiper = new Swiper('.deals-swiper', {
    speed: 400,
    slidesPerView: 3.3,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

let dealsSlides = document.querySelectorAll('.deals-slide');
let dealsButtonNext = document.querySelector('.button-next');
let dealsButtonPrev = document.querySelector('.button-prev');

dealsSwiper.on('slideChangeTransitionStart', function () {
    console.log('slide changed');
    if (dealsSlides[0].classList.contains('swiper-slide-active')) {
        dealsButtonPrev.classList.add('not-active')
    } else {
        dealsButtonPrev.classList.remove('not-active')

    }

    if (dealsSlides[dealsSlides.length - 1].classList.contains('swiper-slide-active')){
        dealsButtonPrev.classList.remove('not-active')
        dealsButtonNext.classList.add('not-active')
    }
});



let changeBtn = document.querySelector('.portfolio__button');
changeBtn.onclick = function () {
    changeBtn.classList.toggle('change')
}

let radioLabel = document.querySelectorAll('.q1');

radioLabel.forEach(el=>{
    el.addEventListener('click', ()=>{
        radioLabel.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')

    })
})

let radioLabel2 = document.querySelectorAll('.q2');

radioLabel2.forEach(el=>{
    el.onclick = function(){
        radioLabel2.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})

let radioLabel3 = document.querySelectorAll('.q3');

radioLabel3.forEach(el=>{
    el.onclick = function(){
        radioLabel3.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})

let radioLabel4 = document.querySelectorAll('.q4');

radioLabel4.forEach(el=>{
    el.onclick = function(){
        radioLabel4.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})



let sytAdd = document.querySelector('.syteAdd')
let webAdd = document.querySelector('.webAdd')
let markAdd = document.querySelector('.markAdd')
let howMth = document.querySelector('.howMth')

let sytQuest = document.querySelector('.sytSec')
let webQuest = document.querySelector('.webSec')

//скролл квиза

let quizButtonNext = document.querySelector('.quiz__buttons__next')
let quizButtonPrew = document.querySelector('.quiz__buttons__prew')
let quizWraper = document.querySelector('.calculator-wraper__left__scroll');
let scrollItems = document.querySelectorAll('.calculator-wraper__left__scroll__item');
let scrollItemWIdth = scrollItems[0].clientWidth + 200;
let indexActiveSlide = 0;
let scrollOffset = 0;
let innerNum = document.querySelector('.innernum');
let hwmth = document.querySelector('.howMth');
let somei = 5;



sytAdd.onclick = function(){
    howMth.innerHTML = '06'
    sytQuest.classList.add('active');
    webQuest.classList.remove('active');
    somei = 5;
}

webAdd.onclick = function(){
    howMth.innerHTML = '05'
    sytQuest.classList.remove('active');
    webQuest.classList.add('active');
    somei = 4;
}

markAdd.onclick = function(){
    howMth.innerHTML = '02'
    sytQuest.classList.remove('active');
    webQuest.classList.remove('active');
    somei = 1;
}


quizButtonNext.onclick = function(){
    
    if(scrollItems[somei].classList.contains('active-quiz-slide')) {
        quizButtonNext.classList.add('not-active')
    } else {
        quizButtonPrew.classList.remove('not-active')
        console.log(scrollItemWIdth);
        scrollOffset = scrollOffset - scrollItemWIdth;
        quizWraper.style.transform = 'translateX('+ scrollOffset + 'px)';
        indexActiveSlide++;
        // scrollItemWIdth = scrollItems[indexActiveSlide].clientWidth + 200;
        scrollItems.forEach(el=>{
            el.classList.remove('active-quiz-slide')
        })
        scrollItems[indexActiveSlide].classList.add('active-quiz-slide')
        if(indexActiveSlide >=somei) {
            quizButtonNext.classList.add('not-active')

        }

    }
    innerNum.innerHTML = indexActiveSlide +1;
}

quizButtonPrew.onclick = function(){
    if(scrollItems[0].classList.contains('active-quiz-slide')) {
        quizButtonPrew.classList.add('not-active')
    } else {
        quizButtonNext.classList.remove('not-active')
        console.log(scrollItemWIdth);
        scrollOffset = scrollOffset + scrollItemWIdth;
        quizWraper.style.transform = 'translateX('+ scrollOffset + 'px)';
        indexActiveSlide--;
        // scrollItemWIdth = scrollItems[indexActiveSlide].clientWidth + 200;
        scrollItems.forEach(el=>{
            el.classList.remove('active-quiz-slide')
        })
        scrollItems[indexActiveSlide].classList.add('active-quiz-slide')
        if(indexActiveSlide <=0) {
            quizButtonPrew.classList.add('not-active')

        }
        
    }
    innerNum.innerHTML = indexActiveSlide +1;
}


//перенос значений из текста 

let textIn = document.querySelectorAll('.textIn');

textIn.forEach(el=>{
    let id = el.getAttribute('data-for')
    let block = document.querySelector(id)
    el.addEventListener('keyup', function(){
        block.value = el.value
    })
})
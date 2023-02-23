const portfolioSwiper = new Swiper('.portfolio-swiper', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.portfolio-swiper-next',
        prevEl: '.portfolio-swiper-prev',
    },
});

const dealsSwiper = new Swiper('.deals-swiper', {
    speed: 400,
    slidesPerView: 3.3,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
      },
      // when window width is >= 480px
      480: {
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.1,
      },
      1023: {
        slidesPerView: 3.3,
      }
    }
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



let monBut = document.querySelector('.mon-but');
monBut.onclick = function () {
    monBut.classList.toggle('change')
}

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

let radioLabel4a = document.querySelectorAll('.sq2');

radioLabel4a.forEach(el=>{
    el.onclick = function(){
        radioLabel4a.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})

let mp3 = document.querySelectorAll('.sq4');

mp3.forEach(el=>{
    el.onclick = function(){
        el.classList.toggle('active')
    }
})



let sytAdd = document.querySelector('.syteAdd')
let webAdd = document.querySelector('.webAdd')
let markAdd = document.querySelector('.markAdd')
let placeAdd = document.querySelector('.placeAdd')
let howMth = document.querySelector('.howMth')
let price = document.querySelector('.priseinner')

let sytQuest = document.querySelector('.sytSec')
let webQuest = document.querySelector('.webSec')
let markettingQuest = document.querySelector('.marketting')
let marketplace = document.querySelector('.marketplace')

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
    price.innerHTML = '15 000';
    sytQuest.classList.add('active');
    webQuest.classList.remove('active');
    markettingQuest.classList.remove('active')
    marketplace.classList.remove('active')
    somei = 5;
}

webAdd.onclick = function(){
    price.innerHTML = '50 000';
    howMth.innerHTML = '06'
    sytQuest.classList.remove('active');
    markAdd.classList.remove('active')
    marketplace.classList.remove('active')
    webQuest.classList.add('active');
    somei = 5;
}

markAdd.onclick = function(){
    price.innerHTML = '30 000';
    howMth.innerHTML = '03'
    sytQuest.classList.remove('active');
    webQuest.classList.remove('active');
    marketplace.classList.remove('active')
    markettingQuest.classList.add('active')
    somei = 2;
}

placeAdd.onclick = function(){
    price.innerHTML = '30 000';
    howMth.innerHTML = '08'
    sytQuest.classList.remove('active');
    webQuest.classList.remove('active');
    markettingQuest.classList.remove('active')
    marketplace.classList.add('active')
    somei = 7;
}



quizButtonNext.onclick = nextQuiz;

quizButtonPrew.onclick = prevQuiz;

function nextQuiz (){
    
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

function prevQuiz (){
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

//открытие мобильного меню 

let mobileMenuBtn = document.querySelector('.mobile-menu-button')
let mobileMenu = document.querySelector('.mobile-menu')

mobileMenuBtn.onclick = ()=>{
    mobileMenu.classList.toggle('active')
    mobileMenuBtn.classList.toggle('active')
}

//работа калькулятора





function offsetPosition(element) {
    var offsetLeft = 0, offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop  += element.offsetTop;
    } while (element = element.offsetParent);
    return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollBtn');
scrollBtn.forEach(el => {
    let elem = el;
    el.addEventListener('click', function(){
        let data = elem.getAttribute('data-b');
        let block = document.querySelector(data);
        let offset = offsetPosition(block);
        window.scrollTo({
            top: offset - 150,
            behavior: 'smooth'
        });
    })
});
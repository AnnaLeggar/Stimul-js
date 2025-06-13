
 /*swiper index.html*/

const slider1 = new Swiper('#slider1', {
    effect: "fade",
    allowTouchMove: false,

    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });


 const slider2 = new Swiper('#slider2', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,

    navigation: {
        nextEl: ".gallery__btn__next",
        prevEl: ".gallery__btn__prev",
      },
      
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });

 /*Header-burg*/ 

 const headerEl = document.getElementById("header-main")

 window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if(scrollPos > 100) {
        headerEl.classList.add("header-main-scr")
    }else{
        headerEl.classList.remove("header-main-scr")
    }
 });

 /*Menu btn -mobile*/ 

 const menuBtn = document.querySelector('.menu__btn');

 const menu = document.querySelector('.menu__list');

 const body = document.body;

 menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    menuBtn.classList.toggle('menu--active');
    body.classList.toggle('lock');
 });

 menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu--active');
        menuBtn.classList.remove('menu--active');body.classList.remove('lock');
    });
 });

 /**/ 

 var $page = $('html, body');
 $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top 
    }, 1000);
    return false;
 });


 /*pop-up main index*/ 

const openPopUp = document.getElementById('open__pop__up');

const closePopUp = document.getElementById('pop__up__close');

const popUp = document.getElementById('pop__up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');

});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

 /*Mask-pop-up main*/ 

 let selector = document.querySelector("#main_tel")
 let im = new Inputmask("+7(999) 999-99-99")
 im.mask(selector)


 /*Clear input*/ 

 function myFunction() {
  document.getElementById("formmain").reset();
 };


 /*back_to_top*/ 

 $(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 700) {
        $('#back_to_top').addClass('active');
    } else {
        $('#back_to_top').removeClass('active');
    }
 });

 $('#back_to_top').click(function () {
    $('body,html').animate({scrollTop: 0}, 1000)
 });


 const scrollController = {
  scrollPosition: 0,
  disabledScroll () {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    left: 0;
    top: -${scrollController.scrollPosition}px;
    height: 100vh;
    width: 100vw;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
  },

  enabledScroll () {
    document.body.style.cssText = '';
    window.scroll({top: scrollController.scrollPosition})
  },

 };

 /*Serv pop-up 1*/ 

 const servopenPopUp = document.getElementById('servopen__pop__up');

 const servclosePopUp = document.getElementById('pop__up__serclose');
 
 const servpopUp = document.getElementById('serpop__up');


 servopenPopUp.addEventListener('click', function(e) {
     e.preventDefault();
     servpopUp.classList.add('active');

     scrollController.disabledScroll();
 });

 servclosePopUp.addEventListener('click', () => {
    servpopUp.classList.remove('active');

    scrollController.enabledScroll();
});

let selector1 = document.querySelector("#serv_tel")
let imn = new Inputmask("+7(999) 999-99-99")
 imn.mask(selector1)

function servFunction() {
  document.getElementById("formserv").reset();
 };


/*Serv pop-up 2*/ 

const servopenPopUp2 = document.getElementById('servopenn__pop__up');

const servclosePopUp2 = document.getElementById('pop__up__servclose');

const servpopUp2 = document.getElementById('servpop__up');


servopenPopUp2.addEventListener('click', function(e) {
    e.preventDefault();
    servpopUp2.classList.add('active');

    scrollController.disabledScroll();
});

servclosePopUp2.addEventListener('click', () => {
   servpopUp2.classList.remove('active');

   scrollController.enabledScroll();
});

let selector2 = document.querySelector("#serv2_tel")
let imnn = new Inputmask("+7(999) 999-99-99")
 imnn.mask(selector2)

function serviFunction() {
  document.getElementById("formserv2").reset();
 };

/*Serv pop-up 3*/ 
 
const servopenPopUp3 = document.getElementById('servopennn__pop__up');

const servclosePopUp3 = document.getElementById('pop__up__servicclose');

const servpopUp3 = document.getElementById('servicpop__up');


servopenPopUp3.addEventListener('click', function(e) {
    e.preventDefault();
    servpopUp3.classList.add('active');

    scrollController.disabledScroll();
});

servclosePopUp3.addEventListener('click', () => {
   servpopUp3.classList.remove('active');

   scrollController.enabledScroll();
});

let selector3 = document.querySelector("#serv3_tel")
let imnnn = new Inputmask("+7(999) 999-99-99")
 imnnn.mask(selector3)

function servicFunction() {
  document.getElementById("formserv3").reset();
 };

/*Validate pop-up main*/ 

const validation = new window.JustValidate('#formmain', {
  errorLabelStyle: {
    color:'rgb(5, 36, 67)'
  }
})

validation.addField("#main_name", [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа',
    },
  ])
  .addField("#main_tel", [
    {
      validator: (value) => {
        const main_tel = selector.inputmask.unmaskedvalue();
        return Boolean(Number(main_tel) && main_tel.length > 0)
      },
      errorMessage: 'Введите телефон',
    }, 
    {
      validator: (value) => {
        const main_tel = selector.inputmask.unmaskedvalue();
        return Boolean(Number(main_tel) && main_tel.length == 10)
      },
      errorMessage: 'Введите телефон полностью',
    }
  
  ])

  
/*Validate Serv pop-up 1*/ 


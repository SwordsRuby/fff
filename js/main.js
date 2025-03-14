//function for slider swap on main
function sliderActive(translate, elem) {
    var x = window.matchMedia("(max-width: 1210px)")
    var x1 = window.matchMedia("(max-width: 800px)")
    var width = 1200;
    if (x.matches == true) {
        width = 793;
    } else if (x1.matches == true) {
        width = 400;
    } else {
        width = 1200;
    }

    const slider = document.getElementById("banner_slider_block");
    const slider_pagin = document.getElementsByClassName("dot");
    slider.style.opacity = "0";
    console.log(width)
    setTimeout(() => {
        slider.style.transform = "translateX(" + (translate * width) + "px )";
    }, 400);
    setTimeout(() => {
        slider.style.opacity = "1";
    }, 800);
    for (let index = 0; index < slider_pagin.length; index++) {
        slider_pagin[index].classList.remove('dot_active');
    }
    elem.classList.add('dot_active');
}

//function for see text on product_card
function textSee(elem) {
    const background_block = document.getElementById('background_block');

    setTimeout(() => {
        background_block.style.opacity = "0"
    }, 200);
    elem.style.display = "none";
}

//function for swap img on product_card
function imgSwap(elem) {
    const main_img = document.getElementById('main_img');
    const book_img = document.getElementsByClassName('book_img');

    for (let index = 0; index < book_img.length; index++) {
        if (elem == book_img[index]) {
            imgSrc = elem.src;
            elem.src = main_img.src;
            main_img.src = imgSrc;
        }
    }
}

//function for close authorization and registration
function authRegNone() {
    const auth = document.getElementById('auth');
    const reg = document.getElementById('reg');

    auth.style.display = "none"
    reg.style.display = "none"
}

//function for see registration
function reg() {
    const auth = document.getElementById('auth');
    const reg = document.getElementById('reg');

    auth.style.display = 'none';
    reg.style.display = 'flex';
}

//function for see authorization
function auth() {
    const auth = document.getElementById('auth');

    auth.style.display = 'flex';
}

function burger_menu() {
    const burger_el = document.getElementsByClassName('burger');
    const burger_menu = document.getElementsByClassName('burger-menu');

    burger_el[0].classList.toggle('none');
    burger_menu[0].classList.toggle('burger-active');
}
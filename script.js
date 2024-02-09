


let buyBtn = document.querySelector('.buy_btn')
let modalWindow = document.querySelector(".modal")
let modalWindowCoint = document.querySelector(".modal_coint")
let body = document.body

let burg = document.querySelector('.burger')
let burg_line1 = document.querySelector('.header_line1')
let burg_line2 = document.querySelector('.header_line2')
let burg_line3 = document.querySelector('.header_line3')
let burg_line4 = document.querySelector('.header_line4')
let burg_line5 = document.querySelector('.header_line5')
let burg_mod = document.querySelector('.burger_modal')
let burger_modal_top = document.querySelector(".burger_modal_top")
let burger_modal_cent = document.querySelector(".burger_modal_cent")
let burger_modal_bot = document.querySelector(".burger_modal_bot")

burg.addEventListener('click', (event) => {
    burg_line1.classList.toggle('header_line1_active')
    burg_line2.classList.toggle('header_line2_active')
    burg_line3.classList.toggle('header_line3_active')
    burg_line4.classList.toggle('header_line4_active')
    burg_line5.classList.toggle('header_line5_active')
    burg.classList.toggle('burger_active')
    burg_mod.classList.toggle('burger_modal_active')
    burger_modal_top.classList.toggle('burger_modal_top_active')
    burger_modal_cent.classList.toggle('burger_modal_cent_active')
    burger_modal_bot.classList.toggle('burger_modal_bot_active')
})

buyBtn.addEventListener('click', (event) => {
    modalWindowCoint.classList.toggle('modal_coint_active')
    modalWindow.classList.toggle('modal_active')
    body.classList.toggle('body_active')
})
modalWindow.addEventListener('click', (event) => {
    modalWindowCoint.classList.toggle('modal_coint_active')
    modalWindow.classList.toggle('modal_active')
    body.classList.toggle('body_active')
})


let jac1 = document.querySelector('#jac1')
let jac2 = document.querySelector('#jac2')
let jac3 = document.querySelector('#jac3')

let sec3 = document.querySelector('.sc3')
let pos_sec3 = sec3.offsetTop
let pos_sec3_w = sec3.offsetWidth

jac1.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: pos_sec3 - 80, left: 0, behavior: "smooth" })
})

let sec2 = document.querySelector('.sc2')
let pos_sec2 = sec2.offsetTop
let pos_sec2_w = sec2.offsetWidth

jac2.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: pos_sec2 - 80, left: 0, behavior: "smooth" })
})

let footer = document.querySelector('footer')
let pos_footer = footer.offsetTop
let pos_footer_w = footer.offsetWidth

jac3.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: pos_footer - 80, left: 0, behavior: "smooth" })
})

let li1 = document.querySelector('.header_link_item1')
let li2 = document.querySelector('.header_link_item2')
let li3 = document.querySelector('.li2')
let li4 = document.querySelector('.li3')

li1.addEventListener('mousemove', (event) => {
    li1.style.opacity = 60 + "%"
    li1.addEventListener('mouseleave', (event) => {
        li1.style.opacity = 100 + "%"
    })
})

li2.addEventListener('mousemove', (event) => {
    li2.style.opacity = 60 + "%"
    li2.addEventListener('mouseleave', (event) => {
        li2.style.opacity = 100 + "%"
    })
})
li3.addEventListener('mousemove', (event) => {
    li3.style.opacity = 60 + "%"
    li3.addEventListener('mouseleave', (event) => {
        li3.style.opacity = 100 + "%"
    })
})
li4.addEventListener('mousemove', (event) => {
    li4.style.opacity = 60 + "%"
    li4.addEventListener('mouseleave', (event) => {
        li4.style.opacity = 100 + "%"
    })
})



new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



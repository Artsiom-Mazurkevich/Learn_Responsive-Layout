const navId = document.getElementById('nav_menu'),
    toggleBtnId = document.getElementById('toggle_btn'),
    closeBtn = document.getElementById('close_btn')


// =====  SHOW MENU  ====== //

toggleBtnId.addEventListener('click', () => {
    navId.classList.add('show')
})


// =====  HIDE MENU  ====== //

closeBtn.addEventListener('click', () => {
    navId.classList.remove('show')
})



// =====  INITIALIZE AOS  ====== //
AOS.init();


// =====  GSAP Animations  ====== //

// =====  Logo Animate  ====== //
gsap.from('.logo', {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5
})

// =====  NAV-MENU Animate  ====== //
gsap.from('.nav_menu_list .nav_menu_item', {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
    stagger: 0.3
})

// =====  TOGGLE_BTN Animate  ====== //
gsap.from('.toggle_btn', {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
})

// =====  MAIN_HEADING Animate  ====== //
gsap.from('.main-heading', {
    opacity: 0,
    y: 20,
    delay: 2.4,
    duration: 1,
})

// =====  INFO TEXT Animate  ====== //
gsap.from('.info-text', {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
})


// =====  CTA BUTTONS Animate  ====== //
gsap.from('.btn_wrapper', {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
})

// =====  TEAM IMAGE Animate  ====== //
gsap.from('.team_img_wrapper img', {
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 1,
})

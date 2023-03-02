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

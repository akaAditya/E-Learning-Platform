
berger = document.querySelector('.berger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

berger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav-resp')
    navList.classList.toggle('v-nav-resp')
    navBar.classList.toggle('h-nav-resp')
})
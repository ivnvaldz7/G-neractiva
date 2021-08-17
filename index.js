const icon = document.getElementById('icon')
const nav = document.getElementById('nav-ul')

icon.addEventListener('click',()=>{
    nav.classList.toggle('nav_ul--show')
})

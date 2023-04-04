const welcomeTitle = document.querySelector('#welcome-title')

welcomeTitle.addEventListener('click',(e) => {
    e.target.innerHTML = 'Have a Good Time!'
})


const btnCTA = document.querySelector('#btn__CTA')

btnCTA.addEventListener('click', (e) => {
    const containerCTA = document.querySelector('#container__CTA')
    containerCTA.classList.remove('container__cards--hide')

})

const mainNav = document.querySelector('.main-nav')

mainNav.addEventListener('click', (e) => {

    console.log(e.target.id)

    if (e.target.id ==='side-menu-open' || e.target.id ==='side-menu-close') {
        document.querySelector("#side-menu").classList.toggle('main-nav__menu--show')
    }

})
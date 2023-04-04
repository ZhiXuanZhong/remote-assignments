const welcomeTitle = document.querySelector('#welcome-title')

welcomeTitle.addEventListener('click',(e) => {
    e.target.innerHTML = 'Have a Good Time!'
})


const btnCTA = document.querySelector('#btn__CTA')

btnCTA.addEventListener('click', (e) => {
    const containerCTA = document.querySelector('#container__CTA')
    containerCTA.classList.remove('container__cards--hide')

})
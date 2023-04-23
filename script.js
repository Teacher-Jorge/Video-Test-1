const btnWrong1 = document.getElementById('btnWrong1')
const btnWrong2 = document.getElementById('btnWrong2')
const btnCorrect = document.getElementById('animation-button')
const btnPlay = document.getElementById('btnPlay')

let translate = document.getElementById('translate')

btnPlay.addEventListener('click', function() {
    let click = document.getElementById('click')
    click.play()
    let video = document.getElementById('video')
    video.play()
})

btnCorrect.addEventListener('click', (e) => {
    e.preventDefault
    btnCorrect.classList.add('animate')
    setTimeout(() => {
        btnCorrect.classList.remove('animate')
    }, 1000)  
    let right = document.getElementById('right')
    right.play()
    translate.style.visibility = 'visible'
    let click = document.getElementById('click')
    click.play()
    btnCorrect.style.backgroundColor = 'lime'
    btnCorrect.style.color = 'green'
    btnCorrect.disabled = 'true'
    btnWrong1.disabled = 'true'
    btnWrong2.disabled = 'true'
})

btnWrong1.addEventListener('click', function() {
    let click = document.getElementById('click')
    click.play()
    let wrong1 = document.getElementById('wrong1')
    wrong1.play()
    btnWrong1.style.backgroundColor = 'red'
    btnWrong1.style.color = 'yellow'
    btnWrong1.disabled = 'true'
})

btnWrong2.addEventListener('click', function() {
    let click = document.getElementById('click')
    click.play()
    let btnWrong2 = document.getElementById('btnWrong2')
    wrong2.play()
    btnWrong2.style.backgroundColor = 'red'
    btnWrong2.style.color = 'yellow'
    btnWrong2.disabled = 'true'
})

translate.addEventListener('click', function() {
    let audio = document.getElementById('audio')
    audio.play()
    let click = document.getElementById('click')
    click.play()
    let sentence = document.getElementById('sentence')
    translate.innerText = 'Eu preferiria não estar fazendo nada agora.'
    setTimeout(() => {
        translate.innerHTML = 'Translate'
    }, 4000);
})


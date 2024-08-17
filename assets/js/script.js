let play = document.querySelector('.play');
let stop = document.querySelector('.stop');
let video = document.querySelector('#background-video');


play.addEventListener('click', () => {
    play.classList.add('active')
    stop.classList.remove('active')
    if(video.paused){
        video.play()
    }
})
stop.addEventListener('click',()=>{
    play.classList.remove('active')
    stop.classList.add('active')
    video.pause()
})
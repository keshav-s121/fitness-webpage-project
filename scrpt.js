function toggleNav() {
const nav =document.querySelector('.nav');
const menu = document.querySelector('.menu');
nav.classList.toggle('active');
menu.classList.toggle('active');
}
function togglevideo() {
     const video = document.querySelector('.bg-vedio');
      const play = document.querySelector('.play');
       const slider = document.querySelector('.swiper');
        const contant = document.querySelector('.contant');
        const form = document.querySelector('form');
        const sci= document.querySelector('sci');



        video.classList.toggle('active');
        play.classList.toggle('active');
        slider.classList.toggle('active');
        contant.classList.toggle('active');
        form.classList.toggle('active');
         sci.classList.toggle('active');




}
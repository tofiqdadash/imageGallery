const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides .slide');

let author = document.querySelector('#author');
let title = document.querySelector('#title');

const  nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


const progressLine = document.querySelector('.progress-line');
 let width1 = progressLine.offsetWidth;

 const arts = document.querySelectorAll('.slides #artTitle');
 const artists = document.querySelectorAll('.slides #artArtist');

//Counter for slides
let counter = 0;

const size = slides[0].clientWidth;


slidesContainer.style.transform = 'translateY(' + (-700 * counter) + 'px)';


//Next , Prev listeners 
nextBtn.addEventListener('click' , () => {
    if(counter >= slides.length - 1) return;
     slidesContainer.style.transition = "transform 0.4s ease-in-out";
          counter++;
     slidesContainer.style.transform = 'translateY(' + (-700 * counter) + 'px)';
     title.textContent = arts[counter].innerText;
     author.textContent = artists[counter].innerText;
    });
    
    prevBtn.addEventListener('click' , () => {
        if(counter <=0) return;
        slidesContainer.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slidesContainer.style.transform = 'translateY(' + (-700 * counter) + 'px)';
        title.textContent = arts[counter].innerText;
        author.textContent = artists[counter].innerText;
    });

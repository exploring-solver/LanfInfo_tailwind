// const slider = document.querySelector('.slider')
// const slides = slider.querySelectorAll('.slide')
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let currentSlide = 0;

// function showSlide(index) {
//   slides.forEach((slide) => slide.classList.remove('active'));
//   slides[index].classList.add('active');
// }

// function prevSlide() {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   }
//   showSlide(currentSlide);
// }

// function nextSlide() {
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//   showSlide(currentSlide);
// }

// // Add automatic sliding
// setInterval(nextSlide, 5000);

// showSlide(currentSlide);
// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);


 const slider = document.querySelector('.slider')
 const slides = slider.querySelectorAll('.slide')
 const prevBtn = document.querySelector('.prev');
 const nextBtn = document.querySelector('.next');
 let currentSlide = 0;
 function showSlide(index) {
     slides.forEach((slide) => slide.classList.add('hidden'));
     slides[index].classList.remove('hidden');
     // slides[index].classList.add('block');
     // slides[index].classList.add('hidden'); 
   }
   function prevSlide() {
     currentSlide--;
     if (currentSlide < 0) {
       currentSlide = slides.length - 1;
     }
     showSlide(currentSlide);
   }
   function nextSlide() {
     currentSlide++;
     if (currentSlide >= slides.length) {
       currentSlide = 0;
     }
     showSlide(currentSlide);
    }

    // Add automatic sliding
    setInterval(nextSlide, 5000);


   showSlide(currentSlide);
   prevBtn.addEventListener('click', prevSlide);
   nextBtn.addEventListener('click', nextSlide);



// function showSlide(index) {
//     slides.forEach((slide) => {
//       slide.style.opacity = 0;  
//       slide.style.transform = 'translateX(-100%)';
//     });
//     slides[index].style.opacity = 1;
//     slides[index].style.transform = 'translateX(0)';
//   }
  
//   function prevSlide() {
//     currentSlide--;  
//     if (currentSlide < 0) {
//       currentSlide = slides.length - 1;  
//     }
//     showSlide(currentSlide);
//   }
  
//   function nextSlide() {
//     currentSlide++;  
//     if (currentSlide >= slides.length) {
//       currentSlide = 0;  
//     }
//     showSlide(currentSlide);
//   }
  
//   showSlide(currentSlide);
//   prevBtn.addEventListener('click', prevSlide);
//   nextBtn.addEventListener('click', nextSlide);



// html

{/* <div class="slider">
  <img class="slide" src="slide1.jpg" alt="Slide 1" onclick="showSlide(0)">
  <img class="slide hidden" src="slide2.jpg" alt="Slide 2" onclick="showSlide(1)">
  <img class="slide hidden" src="slide3.jpg" alt="Slide 3" onclick="showSlide(2)">
</div> */}

//   const slides = document.querySelectorAll('.slide');
//   let currentSlide = 0;
  
//   function showSlide(index) {
//     // Hide all slides
//     slides.forEach((slide) => {
//       slide.classList.add('hidden');
//     });
  
//     // Show the selected slide
//     slides[index].classList.remove('hidden');
//     currentSlide = index;
//   }
  
//   function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= slides.length) {
//       currentSlide = 0;
//     }
//     showSlide(currentSlide);
//   }
  
//   setInterval(nextSlide, 5000);
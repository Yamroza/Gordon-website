let slideIndex = 2;
showSlides(slideIndex);
// let timeout = setTimeout(showSlides(slideIndex+1), 5000)
let buttons = document.getElementsByClassName("fa-solid")


nextEl.addEventListener("click", () => {
    clearTimeout(timeout);
  });

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex + n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  // clearTimeout(timeout);
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("fa-circle");
  slideIndex = n;
  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // timeout = setTimeout(() => {
  //   showSlides(slideIndex + 1);
  // }, 5000);

//   setTimeout(slideIndex += 1, 5000);
//   showSlides(slideIndex);
//   setTimeout(showSlides(slideIndex += 1), 5000); // Change image every 5 seconds
} 


// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("fa-circle");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";

//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// } 

let myID = document.getElementsByClassName("alternate");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 10) {
    myID[0].className = "header alternate shown";
  }
  else {
    myID[0].className = "header alternate";
  }
};

window.addEventListener("scroll", myScrollFunc);
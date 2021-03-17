// opacity animation js code here
function scrollAppear(){
  var animationElement = document.querySelector('.animation-element');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear);

function scrollAppear2(){
  var animationElement = document.querySelector('.animation-element2');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear2);
function scrollAppear3(){
  var animationElement = document.querySelector('.animation-element3');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear3);
function scrollAppear4(){
  var animationElement = document.querySelector('.animation-element4');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear4);

function scrollAppear5(){
  var animationElement = document.querySelector('.animation-element5');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear5);

function scrollAppear6(){
  var animationElement = document.querySelector('.animation-element6');
  var inroPosition = animationElement.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset / 1.4;
  if (inroPosition < screenPosition) {
    animationElement.classList.add('animation-active');
  }else{
    animationElement.classList.remove('animation-active');
  }
}
window.addEventListener('scroll', scrollAppear6);
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});


// focus on contact fields 
function setFocusToTextBox(){
  document.querySelectorAll("input").focus();
  InputDeviceInfo.addEventListener('click' , setFocusToTextBox);
}



//Get the button
var mybutton = document.querySelector(".myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "initial";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

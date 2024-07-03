const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
   const navBar = document.querySelector(".nav-bar")
   navBar.classList.toggle("active")
}
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.kontakt-btn')
    button.addEventListener('mousedown', () => {
    button.classList.add('white-button');
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('white-button');
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('white-button');
  });
    
})
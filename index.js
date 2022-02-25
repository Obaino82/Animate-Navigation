const showbtn = document.getElementById('toggle');
const navBar = document.getElementById('nav');

showbtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

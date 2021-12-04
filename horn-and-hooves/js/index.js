$('#btn-mb-menu').on('click', function() {
  $('#btn-mb-menu').toggleClass('active-btn-mb-menu');
});

let openMbMenu = document.querySelector('#btn-mb-menu').addEventListener('click', () => {
  document.querySelector('#mb-menu').style.display = "block";
});
let closeMbMenu = document.querySelector('#btn-close-mb-menu').addEventListener('click', () => {
  document.querySelector('#mb-menu').style.display = "none";
  document.querySelector('#btn-mb-menu').classList.remove("active-btn-mb-menu");
});

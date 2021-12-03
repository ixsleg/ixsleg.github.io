let openModalLogin = document.querySelector('#login').addEventListener('click', () => {
  document.querySelector('#modal-login').style.display = "block";
});
let closeModalLogin = document.querySelector('.btn-close').addEventListener('click', () => {
  document.querySelector('#modal-login').style.display = "none";
});

let openModalRegistration = document.querySelector('#sign-up').addEventListener('click', () => {
  document.querySelector('#modal-registration').style.display = "block";
});
let closeModalRegistration = document.querySelector('.btn-close-registration').addEventListener('click', () => {
  document.querySelector('#modal-registration').style.display = "none";
});

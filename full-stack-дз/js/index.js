// Иземенение цвета колёс ко клику

function clickWheelColor() {
  let wheel = document.querySelectorAll('#wheel');

  for (let i = 0; i < wheel.length; i++) {
    wheel[i].style.fill = 'blue';
  }
}

// Передний ход машины по клику

function forward() {
  let carForward = document.querySelector('#car');

  carForward.style.transform = 'translateX(200%)';
  carForward.style.transition = 'transform 3s ease';
}

// Задний ход машины двойным кликом

function back() {
  let carBack = document.querySelector('#car');

  carBack.style.transform = 'translateX(0)';
  carBack.style.transition = 'transform 3s ease'
}

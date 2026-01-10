const counters = document.querySelectorAll('.counter');
const btns = document.querySelectorAll('.btn');
const resetBtns = document.querySelectorAll('.resetbtn');

btns.forEach((button, index) => {
  button.addEventListener('click', () => {
    counters[index].textContent++;
  });
});

resetBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    counters[index].textContent = 0;
  });
});

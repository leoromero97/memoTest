var inputs = document.querySelectorAll('.input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}

/*
const buttonSwitch = document.querySelector("#switch");

buttonSwitch.addEventListener('click', () => (
  document.body.classList.toggle('darkMode');
  buttonSwitch.classList.toggle('active');

));*/
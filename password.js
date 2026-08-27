(function () {
  var correctPassword = "5436";
  var accessStorageKey = "aowAccess_v1";

  var screen = document.getElementById('passwordScreen');
  var form = document.getElementById('passwordForm');
  var input = document.getElementById('passwordInput');
  var error = document.getElementById('passwordError');

  if (!screen || !form || !input || !error) return;

  function unlock() {
    screen.hidden = true;
    document.body.classList.remove('password-locked');
  }

  function checkPassword() {
    if (input.value === correctPassword) {
      sessionStorage.setItem(accessStorageKey, 'granted');
      unlock();
    } else {
      error.textContent = 'Incorrect password.';
      input.value = '';
      input.focus();
    }
  }

  if (sessionStorage.getItem(accessStorageKey) === 'granted') {
    unlock();
  } else {
    document.body.classList.add('password-locked');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkPassword();
  });
})();

const form = document.getElementById("user-registration-form");
const dialog = document.getElementById("dialog-popup");
const closeBtn = document.getElementById("close-dialog-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const personal = document.getElementById("personal-number");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const personalMsg = personal.nextElementSibling;
  const emailMsg = email.nextElementSibling;
  const passwordMsg = password.nextElementSibling;

  let valid = true;

  if (!/^\d{11}$/.test(personal.value)) {
    error(personal, personalMsg, "პირადი ნომერი უნდა იყოს 11 ციფრი");
    valid = false;
  } else {
    success(personal, personalMsg, "კარგია");
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    error(email, emailMsg, "ელ.ფოსტა არასწორია");
    valid = false;
  } else {
    success(email, emailMsg, "კარგია");
  }
  if (password.value.length < 6) {
    error(password, passwordMsg, "პაროლი მინ. 6 სიმბოლო");
    valid = false;
  } else {
    success(password, passwordMsg, "კარგია");
  }

  if (valid) {
    dialog.showModal();
    form.reset();
    clearStyles();
  }
});
closeBtn.addEventListener("click", () => dialog.close());

function error(input, msgBox, text) {
  input.classList.remove("success");
  input.classList.add("error");
  msgBox.classList.remove("success-text");
  msgBox.classList.add("error-text");
  msgBox.textContent = text;
}
function success(input, msgBox, text) {
  input.classList.remove("error");
  input.classList.add("success");
  msgBox.classList.remove("error-text");
  msgBox.classList.add("success-text");
  msgBox.textContent = text;
}
function clearStyles() {
  document.querySelectorAll("input").forEach(i => {
    i.classList.remove("error", "success");
  });
  document.querySelectorAll(".message").forEach(m => {
    m.textContent = "";
  });
}

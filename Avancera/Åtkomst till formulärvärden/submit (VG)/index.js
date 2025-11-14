let send = document.querySelector("#send");
let input = document.querySelector("#name");
let errors = document.querySelector("#errors");
let consent = document.querySelector("#consent");
let nameCheck = document.querySelector("#name-error");
let consentCheck = document.querySelector("#consent-error");

send.disabled = true;

// Unchecks consent if name is changed prior to submit
function errorCheck() {
  input.addEventListener("input", () => {
    consent.checked = false;
    errorCheck();
  });

  // Variables to use as ternary operators
  const nameValid = input.value.trim() !== "";
  const consentGiven = consent.checked === true;

  // Shows specific errors if they are falsy
  nameCheck.style.display = nameValid ? "none" : "list-item";
  consentCheck.style.display = consentGiven ? "none" : "list-item";

  // Always shows both errors if both are falsy
  errors.style.display = nameValid && consentGiven ? "none" : "block";

  // Disables send button if both are falsy
  send.disabled = !(nameValid && consentGiven);
}

input.addEventListener("input", errorCheck);
consent.addEventListener("change", errorCheck);

// Makes sure errors are shown before input
errorCheck();

function greeting() {
  let n = input.value;
  document.querySelector("#greeting").textContent = "Hej " + n + "!";
}

// Checks for a submit instead of a click and prevents the page from reloading
document.addEventListener("submit", (event) => {
  greeting()
  event.preventDefault()
});

let background = document.querySelector("body");
let title = document.querySelector("h1");
let setup = document.querySelector("#setup");
let punchline = document.querySelector("#punchline");

async function joke() {
  try {
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    let data = await response.json();
    console.log(JSON.stringify(data));

    setup.textContent = data.setup;
    punchline.textContent = data.punchline;

    localStorage.setItem("a", data.setup);
    localStorage.setItem("b", data.punchline);
  } catch (error) {
    console.error("ERROR: ", error);
    setup.textContent = "ERROR: " + error;
    punchline.style.display = "none";
  }
}

function jokeLayout() {
  title.style.position = "fixed";
  title.style.top = "0";
  title.style.fontSize = "18px";
  setup.style.fontSize = "24px";
}

function lastJoke() {
  title.style.position = "fixed";
  title.style.top = "0";
  title.style.fontSize = "18px";
  setup.textContent = localStorage.getItem("a");
  punchline.textContent = localStorage.getItem("b");
}

function newColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function newGradient() {
  const color1 = newColor();
  const color2 = newColor();
  const angle = Math.floor(Math.random() * 360);

  background.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

addEventListener("click", jokeLayout);
addEventListener("click", joke);
window.addEventListener("DOMContentLoaded", lastJoke);
addEventListener("DOMContentLoaded", newGradient);

/* Extra utmaning:

Lägg till en enkel fade-in-animation när ett nytt skämt visas.
Använd Storage för att visa upp sista skämt direkt vid onload. */

let searchInput = document.querySelector("#search");
let submit = document.querySelector("#submit");

async function getItem() {
  let search = searchInput.value.toLowerCase();

  try {
    let response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/" + search
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getItem();
});

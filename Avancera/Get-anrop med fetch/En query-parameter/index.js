async function getCity() {
  let searchedCity = prompt("Sök på din stad!");
  try {
    promise = await fetch("https://avancera.app/cities/?name=" + searchedCity);
    data = await promise.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getCity();

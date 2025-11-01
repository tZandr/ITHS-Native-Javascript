async function getCity() {
  let searchedCity = prompt("Sök på städer!");
  let minPopulation = prompt(
    "Vad är minsta antalet invånare du vill söka efter?"
  );

  try {
    const response = await fetch(
      "https://avancera.app/cities/?name=" +
        searchedCity +
        "&population_gte=" +
        minPopulation
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getCity();

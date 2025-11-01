async function getCity() {
  let chosenCity = prompt("Skriv in en stads ID från avancera.app/cities");
  try {
    const response = await fetch("https://avancera.app/cities/" + chosenCity);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getCity();

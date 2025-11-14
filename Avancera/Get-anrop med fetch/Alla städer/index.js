async function getCities() {
  try {
    const response = await fetch("https://avancera.app/cities/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getCities();

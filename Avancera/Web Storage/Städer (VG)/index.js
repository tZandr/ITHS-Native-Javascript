async function b() {
  try {
    const response = await fetch("https://avancera.app/cities/");
    const data = await response.json();
    localStorage.setItem("cities", JSON.stringify(data));
    console.log(JSON.stringify(data))
  } catch (error) {
    console.error("Error: ", error);
  }
};

localStorage.setItem('cities', b())

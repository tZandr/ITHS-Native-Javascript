async function getCities() {
  try {
    const promise = await fetch(
      "https://avancera.app/cities/4787e794-b3ac-4a63-bba0-03203f78e553"
    );
    const data = await promise.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getCities();

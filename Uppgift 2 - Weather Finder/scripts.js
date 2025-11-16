let city = document.querySelector('#city')

async function cityData() {
    try {
        const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + city.value)
        const data = await response.json()
        console.log(data)

        const getWeather = await fetch('')
        // example for stockholm:
        // https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&current_weather=true


    } catch(error) {
        console.error('Error: ', error)
    }
}

document.addEventListener("submit", (e) => {
    e.preventDefault()
    cityData()
    console.log(city.value)
})

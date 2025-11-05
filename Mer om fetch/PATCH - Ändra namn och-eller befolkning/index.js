async function patchCity() {
    let cityID = prompt('Vilket ID har staden du vill ändra namn på?')
    let cityName = prompt('Vad ska den heta nu?')
    let cityPopulation = prompt('Hur många bor där? Svara i siffror.')

    let payload = {}
    if (cityName !== '')
        {payload.name = cityName.trim()}
        else {payload.name = null}
    if (cityPopulation !== '') 
         {payload.population = Number(cityPopulation)}
        else {payload.population = null}

    fetch(`https://avancera.app/cities/${cityID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('ERROR: ', error))
}

patchCity()
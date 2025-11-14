async function patchCity() {
    let cityID = prompt('Vilket ID har staden du vill ändra namn på?')
    let cityName = prompt('Vad ska den heta nu?')

    fetch(`https://avancera.app/cities/${cityID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cityName
        })
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('ERROR: ', error))
}

patchCity()
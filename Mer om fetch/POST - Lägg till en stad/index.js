async function addCity() {
    let cityName = prompt('Vilken stad vill du lägga till?')
    let cityPopulation = prompt('Hur många bor där?')
    try {
        let response = await fetch('https://avancera.app/cities/.', {
            body: '{ "name": ' + cityName + ', "population": ' + cityPopulation + ' }',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('ERROR: ', error)
    }
}

addCity()
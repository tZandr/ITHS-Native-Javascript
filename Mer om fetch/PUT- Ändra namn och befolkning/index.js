async function editCity() {
    let cityID = prompt('Vilken stad vill du ändra?')
    let cityName = prompt('Vilken stad vill du lägga till?')
    let cityPopulation = prompt('Hur många bor där?')

    fetch(`https://avancera.app/cities/${cityID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: cityID,
            name: cityName,
            population: Number(cityPopulation)
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('ERROR: ', error))
}

editCity()


/* Variant the school's validator doesn't like:

async function editCity() {
    let cityID = prompt('Vilken stad vill du ändra?')
    let cityName = prompt('Vilken stad vill du lägga till?')
    let cityPopulation = prompt('Hur många bor där?')

    try {
        let response = await fetch(`https://avancera.app/cities/${cityID}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: cityID,
                name: cityName,
                population: Number(cityPopulation)
            })
        })

        let data = await response.json()
        console.log(data)

    } catch (error) {
        console.error('Error: ', error)
    }
}
    */
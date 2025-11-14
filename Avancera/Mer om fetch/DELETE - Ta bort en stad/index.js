async function deleteCity() {
    let cityID = prompt('Vilken stad vill du ta bort')

    fetch(`https://avancera.app/cities/${cityID}`, {
        method: 'DELETE'
    })
    .then(response => console.log(response))
    .catch(error => console.error('ERROR: ', error))
}

deleteCity()
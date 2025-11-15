let title = document.querySelector('h1')
let setup = document.querySelector('#setup');
let punchline = document.querySelector('#punchline');

async function joke(){
    try {
        let response = await fetch('https://official-joke-api.appspot.com/random_joke')
        let data = await response.json()
        console.log(JSON.stringify(data))

        setup.textContent = data.setup;
        punchline.textContent = data.punchline;

    } catch(error) {
        console.error('ERROR: ', error)
        setup.textContent = 'ERROR: ' + error
        punchline.style.display = 'none'
    }
}

function jokeLayout() {
    title.style.display = 'none'
    setup.style.fontSize = '24px'
}

document.addEventListener('click', jokeLayout)
document.addEventListener('click', joke)
// API: https://official-joke-api.appspot.com/random_joke

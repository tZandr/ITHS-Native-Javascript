sessionStorage.setItem('users', JSON.stringify([{"name": "Alice"}]))

console.log(JSON.parse(sessionStorage.getItem('users'))[0].name)

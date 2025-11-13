localStorage.setItem('a', 'hello')
sessionStorage.setItem('b', 'hello')

console.log(localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b'))

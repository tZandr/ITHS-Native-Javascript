const newNode = document.createElement('li')
const list = document.querySelector('ol')
const refNode = list.children[2]
list.insertBefore(newNode, refNode)
newNode.textContent = 'Leo'
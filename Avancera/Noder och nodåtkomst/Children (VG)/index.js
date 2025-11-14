let body = document.body
let list = body.children[0]
let items = list.children[1]

for (let i = 0; i < items.children.length; i++) {
  console.log(items.children[i])
}

// Do not use(Assignment):
// document.querySelector, 
// document.querySelectorAll, 
// document.getElementById,
// document.getElementsByTagName.
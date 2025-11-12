function logKey(keyboardEvent){
  if (keyboardEvent.key !== false && keyboardEvent.key !== 'Shift'){
  console.log(keyboardEvent.key)
  }}

addEventListener('keydown', logKey)

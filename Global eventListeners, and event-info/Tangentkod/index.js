function logKey(keyboardEvent){
  if (keyboardEvent.key !== false && keyboardEvent.shiftKey === true && keyboardEvent.key !== 'Shift'){
  console.log(keyboardEvent.key)
  }}

addEventListener('keydown', logKey)

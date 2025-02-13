const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón',
  'Jennie te aconseja el otro botón',
  'Jisoo dice ¿Estás segura?',
  'Lisa dice que pienses bien en tu decisión',
  'Rosé opina que pienses muy bien',
  'Jennie dice ¿Segura? Mira el otro botón',
  'Jisoo te pregunta si de verdad lo has pensado?',
  'Lisa sugiere que mire el otro botón',
  'Rosé dice que le des otra vuelta',
  'Jennie dice que no te precipites, mira a la izquierda',
  'Jisoo opina que el otro botón es mejor',
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
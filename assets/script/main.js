let vergroten = document.querySelector('#vergroten')

vergroten.addEventListener('click', bigHandler)
vergroten.addEventListener('animationend', bigHandler)

function bigHandler() {
  vergroten.classList.toggle('vergroten')
}

let ondersteboven = document.querySelector('#ondersteboven')

ondersteboven.addEventListener('dblclick', upsideHandler)
ondersteboven.addEventListener('animationend', upsideHandler)

function upsideHandler() {
  ondersteboven.classList.toggle('ondersteboven')
}

let schuiven = document.querySelector('#schuiven')

schuiven.addEventListener('mouseover', shoveHandler)
schuiven.addEventListener('animationend', shoveHandler)

function shoveHandler() {
  schuiven.classList.toggle('schuiven')
}

let draaien = document.querySelector('#draaien')

draaien.addEventListener('mouseout', turnHandler)
draaien.addEventListener('animationend', turnHandler)

function turnHandler() {
  draaien.classList.toggle('draaien')
}

let kleiner = document.querySelector('#kleiner')

kleiner.addEventListener('mouseenter', smallHandler)
kleiner.addEventListener('animationend', smallHandler)

function smallHandler() {
  kleiner.classList.toggle('kleiner')
}

let onzichtbaar = document.querySelector('#onzichtbaar')

onzichtbaar.addEventListener('mouseleave', invicHandler)
onzichtbaar.addEventListener('animationend', invicHandler)

function invicHandler() {
  onzichtbaar.classList.toggle('onzichtbaar')
}

let kleuren = document.querySelector('#kleuren')

kleuren.addEventListener('mousedown', colorHandler)
kleuren.addEventListener('animationend', colorHandler)

function colorHandler() {
  kleuren.classList.toggle('kleuren')
}

let trillen = document.querySelector('#trillen')

trillen.addEventListener('keydown', buzzHandler)
trillen.addEventListener('animationend', buzzHandler)

function buzzHandler() {
  trillen.classList.toggle('trillen')
}

let vliegen = document.querySelector('#vliegen')

vliegen.addEventListener('drag', flyHandler)
vliegen.addEventListener('animationend', flyHandler)

function flyHandler() {
  vliegen.classList.toggle('vliegen')
}

let omvallen = document.querySelector('#omvallen')

omvallen.addEventListener('wheel', fallHandler)
omvallen.addEventListener('animationend', fallHandler)

function fallHandler() {
  omvallen.classList.toggle('omvallen')
}
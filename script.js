const secHand = document.querySelector("{data-second}");

function setClock(){
  const currentDate = new Date()
  let seconds = currentDate.getSeconds();
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();

  setRotation(secHand, seconds);
}

function setRotation(hand, rotation){
  hand.style.setProperty('--rotation', rotationDeg)
}

setInterval(setClock, 1000)
setClock()
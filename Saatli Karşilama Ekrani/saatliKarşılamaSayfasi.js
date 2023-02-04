
const name = prompt("Lütfen isminizi giriniz: ")

var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var wd = d.getDay()

  var HaftaGün = ""

  if      (wd == 0) { HaftaGün = "Pazar" }
  else if (wd == 1) { HaftaGün = "Pazartesi" }
  else if (wd == 2) { HaftaGün = "Salı" }
  else if (wd == 3) { HaftaGün = "Çarşamba" }
  else if (wd == 4) { HaftaGün = "Perşembe" }
  else if (wd == 5) { HaftaGün = "Cuma" }
  else if (wd == 6) { HaftaGün = "Cumartesi" }

  span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " + HaftaGün;
}

setInterval(time, 1000);

document.getElementById('output').innerHTML = `Merhaba ${name}! Hoş geldin!`;

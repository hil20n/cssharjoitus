var muutaKuva = document.getElementById("img");
var nappula = document.getElementById("button");

nappula.onclick = function(){
    muutaKuva.id = "uusiImg"; /*kuva koon muutos, css:n puolelta*/
    nappula.id = "nappulaTausta";/* painikkeen värin muutos joka tulee css:n puolelta*/
    nappula.innerHTML = "Tätä painiketta painettiin"; /* painikkeen tekstin vaihto kun painetaan painiketta suoraan tästä*/
}


var nappulaLuokka = document.getElementById("button2");

function kuvaMuutos(){  /* luokka painettu joka toimii css kautta */
   muutaKuva.classList.add("painettu");
}

nappulaLuokka.addEventListener("click", kuvaMuutos); /* kuuntelee painallusta ja functio alkaa toimimaan */
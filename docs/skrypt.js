function reset() {
    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("email").value = "";
    document.getElementById("zgloszenie").value = "";
}

function send() {
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let zgloszenie = document.getElementById("zgloszenie").value;
    let zapoznany = document.getElementById("zapoznany").checked;
    let wiadomosc = document.getElementById("wiadomosc");
    if (!zapoznany) {
        wiadomosc.style.color = "red";
        wiadomosc.innerHTML = "Musisz zapoznać się z regulaminem";
    }
    else {
        wiadomosc.style.color = "navy";
        wiadomosc.innerHTML = imie.toUpperCase()+" "+nazwisko.toUpperCase()+"<br>Treść Twojej sprawy: "+zgloszenie;
    }
}
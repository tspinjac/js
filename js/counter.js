let bot = document.getElementById("botun");
bot.addEventListener("click", odbroji);


function odbroji() {
    let unos = document.getElementById("unos").value;
    console.log("UNOS: " + unos);
    let inpDate = new Date(unos);
    let rodjen = inpDate;

    let sada = new Date();
    console.log("Sada: " + sada);

    let razlika = sada - rodjen;
    console.log("Razlika u ms: " + razlika);

    let sekunde = Math.floor(razlika / 1000);
    console.log("Sekunde: " + sekunde);

    let minute = Math.floor(sekunde / 60);
    console.log("Minute: " + minute);

    let sati = Math.floor(minute / 60);
    console.log("Sati: " + sati);

    let dani = Math.floor(sati / 24);
    console.log("Dani " + dani);

    let godine = Math.floor(dani / 365);
    console.log("Godine " + godine);

    const danaProslo = document.getElementById("dani");
    danaProslo.innerHTML = "<b>Dana prošlo: </b>" + dani;

    const secProslo = document.getElementById("sekunde");
    secProslo.innerHTML = "<b>Sekundi proslo: </b>" + sekunde;
}


setInterval(odbroji, 1000);
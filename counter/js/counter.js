let bot = document.getElementById("botun");
bot.addEventListener("click", odbroji);


function odbroji() {
    let elementUnosInput = document.getElementById("unos");
    let unos = document.getElementById("unos").value;
    let rezultat = document.getElementById("rezultat");
    if (!unos) {
        rezultat.style.display = "none";
        elementUnosInput.classList.add('error');

    } else {
        rezultat.style.display = "block";
        elementUnosInput.classList.remove('error');
        elementUnosInput.classList.add('ok');

    }

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

    const godinaProslo = document.getElementById("godine");
    godinaProslo.innerHTML = "<b>Godina prošlo: </b>" + godine;

    const danaProslo = document.getElementById("dani");
    danaProslo.innerHTML = "<b>Dana prošlo: </b>" + dani;

    const satiProslo = document.getElementById("sati");
    satiProslo.innerHTML = "<b>Sati prošlo: </b>" + sati;

    const minProslo = document.getElementById("minute");
    minProslo.innerHTML = "<b>Minuta prošlo: </b>" + minute;

    const secProslo = document.getElementById("sekunde");
    secProslo.innerHTML = "<b>Sekundi prošlo: </b>" + sekunde;

    setInterval(odbroji, 1000);
}
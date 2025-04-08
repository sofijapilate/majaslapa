function pārbaudītAtbildes() {
    let pareizās = 0;

    if (document.getElementById("q1a4").checked) pareizās++;
    if (document.getElementById("q2a1").checked) pareizās++;
    if (document.getElementById("q3a3").checked) pareizās++;
    if (document.getElementById("q4a4").checked) pareizās++;
    if (document.getElementById("q5a2").checked) pareizās++;

    atbilde.innerHTML = ("Jūsu rezultāts: " + pareizās + " no 5");
}
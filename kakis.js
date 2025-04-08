function pārbaudītAtbildes() {
    let pareizās = 0;

    if (document.getElementById("q1a3").checked) pareizās++;
    if (document.getElementById("q2a3").checked) pareizās++;
    if (document.getElementById("q3a4").checked) pareizās++;
    if (document.getElementById("q4a1").checked) pareizās++;
    if (document.getElementById("q5a4").checked) pareizās++;

    atbilde3.innerHTML = ("Jūsu rezultāts: " + pareizās + " no 5");
}
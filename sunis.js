function pārbaudītAtbildes() {
    let pareizās = 0;

    if (document.getElementById("q1a1").checked) pareizās++;
    if (document.getElementById("q2a1").checked) pareizās++;
    if (document.getElementById("q3a1").checked) pareizās++;
    if (document.getElementById("q4a2").checked) pareizās++;
    if (document.getElementById("q5a4").checked) pareizās++;

    atbilde2.innerHTML = ("Jūsu rezultāts: " + pareizās + " no 5");
}
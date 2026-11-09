const zespol = [
	["Siemieniako", "Kacper", "1", "kacper.siemieniako@example.com", "21560"],
	["???", "???", "?", "???", "???"], // Dane uzupełni Osoba B.
];

// Grupa i e-mail Osoby A są przykładowe.
document.getElementById("nazwisko").textContent = zespol[0][0] + ", " + zespol[1][0];
document.getElementById("imie").textContent = zespol[0][1] + ", " + zespol[1][1];
document.getElementById("grupa").textContent = zespol[0][2] + ", " + zespol[1][2];
document.getElementById("email").textContent = zespol[0][3] + ", " + zespol[1][3];
document.getElementById("indeks").textContent = zespol[0][4] + ", " + zespol[1][4];

const zespol = [
	["Siemieniako", "Kacper", "1", "kacper.siemieniako@example.com", "21560"],
	["???", "???", "?", "???", "???"], // Dane uzupełni Osoba B.
];

// Grupa i e-mail Osoby A są przykładowe.
const pola = ["nazwisko", "imie", "grupa", "email", "indeks"];

for (let i = 0; i < pola.length; i++) {
	document.getElementById(pola[i]).textContent = zespol[0][i] + ", " + zespol[1][i];
}

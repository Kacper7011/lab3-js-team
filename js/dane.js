const zespol = [
	["Siemieniako", "Kacper", "1", "kacper.siemieniako@example.com", "21560"],
	["???", "???", "?", "???", "???"], // Dane uzupełni Osoba B.
];

// Grupa i e-mail Osoby A są przykładowe.
const pola = ["nazwisko", "imie", "grupa", "email", "indeks"];

for (let i = 0; i < pola.length; i++) {
	document.getElementById(pola[i]).textContent = zespol[0][i] + ", " + zespol[1][i];
}

const srodek = Math.floor(tablica.length / 2);

const akapitWhile = document.getElementById("while");
akapitWhile.textContent = "Pierwsza połowa (while): ";
let k = 0;
while (k < srodek) {
	if (k > 0) {
		akapitWhile.textContent += ", ";
	}
	akapitWhile.textContent += tablica[k];
	k++;
}

const akapitFor = document.getElementById("for");
akapitFor.textContent = "Druga połowa (for): ";
for (let i = srodek; i < tablica.length; i++) {
	if (i > srodek) {
		akapitFor.textContent += ", ";
	}
	akapitFor.textContent += tablica[i];
}

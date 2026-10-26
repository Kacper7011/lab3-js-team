const tablica = ['Incepcja', 'Interstellar', 'Matrix', 'Gladiator', 'Shrek'];

console.log(tablica);
console.table(tablica);

tablica[tablica.length - 1] = 'Nowa wartość';
console.log(tablica[tablica.length - 1]);

tablica[5] = 'nowy6';
console.log(tablica.length);
tablica[tablica.length] = 'nowy7';
console.log(tablica.length);
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log(tablica.length);

// Ustawienie elementu pod indeksem 20 daje długość 21, a nieustawione indeksy są puste (tablica[15] === undefined).

const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' + tablica.length + ')</p>');

const wybranyElement = 'nowy8';
document.write(
	'<p>Tablica zawiera element "' +
		wybranyElement +
		'": ' +
		tablica.includes(wybranyElement) +
		', pozycja: ' +
		tablica.indexOf(wybranyElement) +
		'</p>'
);

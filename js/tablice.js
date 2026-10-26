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

// Etap 1: własna tablica, pierwszy i ostatni element oraz unshift().
const nowaTablica = ['Warszawa', 'Gdańsk', 'Kraków', 'Wrocław'];

document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');
document.write('<p>Ostatni element to <strong>');
document.write(nowaTablica[nowaTablica.length - 1] + '</strong></p>');

nowaTablica.unshift('Elbląg');
document.write('<p>Pierwszy element po unshift() to <strong>');
document.write(nowaTablica[0] + '</strong></p>');

// Etap 2: usuwanie elementów i odczyt zwróconych wartości.
const usunietyOstatni = nowaTablica.pop();
const usunietyPierwszy = nowaTablica.shift();

document.write('<p>Usunięto przez pop(): ' + usunietyOstatni + '</p>');
document.write('<p>Usunięto przez shift(): ' + usunietyPierwszy + '</p>');
document.write('<p>W tablicy zostało: ' + nowaTablica.join(', ') + '</p>');

// Etap 3: tablica par [nazwa, ocena].
const oceny = [
    ['JavaScript', 5],
    ['Git', 4],
    ['HTML', 5]
];

console.log(oceny[1]);
console.log(oceny[1][0]);
console.log(oceny[1][1]);

document.write('<p>Drugi element tablicy ocen: ' + oceny[1][0] + ', ocena: ' + oceny[1][1] + '</p>');

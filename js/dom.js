const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaOdnosnikow = document.links.length;
const liczbaAkapitow = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze na całej stronie:', liczbaFormularzy);
console.log('Obrazki na całej stronie:', liczbaObrazkow);
console.log('Odnośniki na całej stronie:', liczbaOdnosnikow);
console.log('Akapity w sekcji #projekt1:', liczbaAkapitow);

document.getElementById('licznik').innerHTML =
	'Formularze na całej stronie: ' +
	liczbaFormularzy +
	'<br>Obrazki na całej stronie: ' +
	liczbaObrazkow +
	'<br>Odnośniki na całej stronie: ' +
	liczbaOdnosnikow +
	'<br>Akapity w sekcji #projekt1: ' +
	liczbaAkapitow;

const naglowekDom = document.querySelector('#dom h3');
naglowekDom.textContent = 'Zadanie 4 – manipulacja DOM';
naglowekDom.classList.add('text-success');

const lista = document.getElementById('lista');
const wartosciDoListy = [
	'Formularze na całej stronie: ' + liczbaFormularzy,
	'Obrazki na całej stronie: ' + liczbaObrazkow,
	'Odnośniki na całej stronie: ' + liczbaOdnosnikow,
];

wartosciDoListy.forEach((wartosc) => {
	const elementListy = document.createElement('li');
	elementListy.textContent = wartosc;
	lista.appendChild(elementListy);
});

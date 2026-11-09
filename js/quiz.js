const questions = [
	["Jaki indeks ma pierwszy element tablicy JavaScript?", 0],
	["Ile elementów ma tablica [10, 20, 30]?", 3],
	["Jaką wartość zwraca Math.floor(7 / 2)?", 3],
	["Ile elementów zostanie w tablicy [1, 2, 3] po jednym pop()?", 2],
	["Ile znaków ma napis JavaScript?", 10],
];

function startQuiz() {
	let score = 0;
	const blednePytania = [];
	const listaBledow = document.getElementById("blednePytania");
	const sekcjaBledow = document.getElementById("bledneOdpowiedzi");

	document.getElementById("wynik").textContent = "";
	listaBledow.replaceChildren();
	sekcjaBledow.hidden = true;

	for (const question of questions) {
		const answer = prompt(question[0], "");
		if (answer !== null && answer.trim() !== "" && Number(answer) === question[1]) {
			alert("Prawidłowa odpowiedź!");
			score++;
		} else {
			alert("Błąd. Prawidłowa odpowiedź to " + question[1]);
			blednePytania.push(question[0]);
		}
	}

	document.getElementById("wynik").textContent = "Wynik: " + score + " / " + questions.length;

	for (const pytanie of blednePytania) {
		const element = document.createElement("li");
		element.textContent = pytanie;
		listaBledow.appendChild(element);
	}
	sekcjaBledow.hidden = blednePytania.length === 0;
}

document.getElementById("startQuiz").addEventListener("click", startQuiz);

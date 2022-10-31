function jumlahkan() {
	angka1 = document.getElementById("number1").value;
	angka2 = document.getElementById("number2").value;
	hasil = 0;
	a = "Penjumlahan angka  "
	b = " dan "
	c = " adalah "

	if (angka1 == "") {
		angka1 = 0;
	}

	if (angka2 == "") {
		angka2 = 0;
	}

	hasil = parseInt(angka1) + parseInt(angka2);

	document.getElementById("jumlah").innerHTML = a + angka1 + b + angka2 + c + hasil;

}

function themes() {
	x = document.getElementById("themes").value;

	if (x == "light") {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "Black";
	}

	else if (x == "dark") {
		document.body.style.backgroundColor = "Black";
		document.body.style.color = "White";
	}

}

function routingToPorto() {
	location.replace("https://leviansky.ii9i40i28fahlev.repl.co/")
}




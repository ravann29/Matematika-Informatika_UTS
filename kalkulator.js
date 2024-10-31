// Variabel untuk menyimpan input angka dan operator
let inputAngka1 = "";
let inputAngka2 = "";
let operator = null;
let hasilTerakhir = "";

// Fungsi untuk menginput angka
function inputAngka(angka) {
  if (hasilTerakhir !== "") {
    clearInput(); // Jika ada hasil terakhir, reset kalkulator
  }
  if (operator === null) {
    inputAngka1 += angka; // Tambah angka ke input pertama
    updateLayar(inputAngka1);
  } else {
    inputAngka2 += angka; // Tambah angka ke input kedua
    updateLayar(inputAngka2);
  }
}

// Fungsi untuk menginput operator
function inputOperator(op) {
  if (inputAngka1 === "") return; // Jika input pertama kosong, batalkan
  operator = op;
  hasilTerakhir = ""; // Reset hasil terakhir untuk operasi berikutnya
}

// Fungsi untuk menghitung hasil
function calculate() {
  if (inputAngka1 === "" || (operator !== "!" && inputAngka2 === "")) {
    alert("Input tidak lengkap.");
    return;
  }

  let hasil;
  const angka1 = parseFloat(inputAngka1);
  const angka2 = parseFloat(inputAngka2);

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      hasil = angka1 / angka2;
      break;
    case "%":
      hasil = angka1 % angka2;
      break;
    default:
      alert("Operator tidak dikenal");
      return;
  }

  hasilTerakhir = hasil;
  updateLayar(hasil);
  inputAngka1 = hasil.toString(); // Simpan hasil sebagai input pertama
  inputAngka2 = "";
  operator = null;
}

// Fungsi untuk menghitung faktorial
function factorial() {
  if (inputAngka1 === "") {
    alert("Masukkan angka untuk faktorial.");
    return;
  }
  const n = parseInt(inputAngka1);
  if (n < 0) {
    alert("Faktorial tidak terdefinisi untuk angka negatif.");
    return;
  }
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  updateLayar(hasil);
  inputAngka1 = hasil.toString();
  operator = null;
  inputAngka2 = "";
}

// Fungsi untuk memperbarui layar
function updateLayar(nilai) {
  document.getElementById("hasil").value = nilai;
}

// Fungsi untuk menghapus input
function clearInput() {
  inputAngka1 = "";
  inputAngka2 = "";
  operator = null;
  hasilTerakhir = "";
  updateLayar("0");
}

// Fungsi untuk mengubah tanda positif/negatif
function toggleSign() {
  if (operator === null) {
    inputAngka1 = (parseFloat(inputAngka1) * -1).toString();
    updateLayar(inputAngka1);
  } else {
    inputAngka2 = (parseFloat(inputAngka2) * -1).toString();
    updateLayar(inputAngka2);
  }
}

// Fungsi untuk memasukkan titik desimal
function inputDecimal() {
  if (operator === null) {
    if (!inputAngka1.includes(".")) {
      inputAngka1 += ".";
      updateLayar(inputAngka1);
    }
  } else {
    if (!inputAngka2.includes(".")) {
      inputAngka2 += ".";
      updateLayar(inputAngka2);
    }
  }
}

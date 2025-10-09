// Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const seatCode = params.get("seat"); // Contoh: A-3-7

// Elemen tampilan
const seatInfo = document.getElementById("seat-info");
const seatMap = document.getElementById("seat-map");

// Tampilkan info kursi
if (seatCode) {
  seatInfo.textContent = `Nomor kursi Anda: ${seatCode}`;
} else {
  seatInfo.textContent = "Silakan pindai QR untuk melihat posisi kursi Anda.";
}

// Generate peta kursi
["A", "B"].forEach((column) => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("column");

  for (let row = 1; row <= 5; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // Tambahkan label kolom di samping baris
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("row-label");
    labelDiv.textContent = `${column}${row}`;
    rowDiv.appendChild(labelDiv);

    // Buat kursi per baris
    for (let num = 1; num <= 10; num++) {
      const seatDiv = document.createElement("div");
      seatDiv.classList.add("seat");
      seatDiv.textContent = num;

      const code = `${column}-${row}-${num}`;
      if (code === seatCode) seatDiv.classList.add("selected");

      rowDiv.appendChild(seatDiv);
    }

    colDiv.appendChild(rowDiv);
  }

  seatMap.appendChild(colDiv);
});

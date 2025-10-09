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

  // Tambahkan barisan kursi VIP di atas sebelum baris reguler
  const vipRow = document.createElement("div");
  vipRow.classList.add("vip-row");

  for (let v = 1; v <= 5; v++) {
    const vipSeat = document.createElement("img");
    vipSeat.src = "img/kursi_vip.png";
    vipSeat.alt = "Kursi VIP";
    vipSeat.classList.add("vip-seat");
    vipRow.appendChild(vipSeat);
  }

  colDiv.appendChild(vipRow);

  // Barisan kursi reguler
  for (let row = 1; row <= 5; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // Label kolom dan baris (contoh: A1, B3)
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("row-label");
    labelDiv.textContent = `${column}${row}`;
    rowDiv.appendChild(labelDiv);

    // Kursi reguler
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

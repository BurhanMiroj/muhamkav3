import fetchDataGuruAndKaryawan from "./api.js";

fetchDataGuruAndKaryawan().then(({ profilKaryawan }) => {
    // ambil data tiap guru
    const karyawanMuhamka = profilKaryawan.karyawan;
    karyawanMuhamka.map(karyawan => {
        const containerKaryawan = document.getElementById("containerKaryawan")
        const cardKaryawan = document.createElement("div");
        cardKaryawan.innerHTML = `
            <p>${karyawan.nama}</p>
            <p>${karyawan.jabatan}</p>
            <p>${karyawan.pengampu}</p>
        `;
        containerKaryawan.appendChild(cardKaryawan)
    })
});
import fetchDataGuruAndKaryawan from "./api.js";

fetchDataGuruAndKaryawan().then(({ profilGuru }) => {
    // ambil data tiap guru
    const guruMuhamka = profilGuru.guru;
    guruMuhamka.map(guru => {
        const containerGuru = document.getElementById("containerGuru")
        const cardGuru = document.createElement("div");
        cardGuru.setAttribute("class", "col-12 col-md-6 col-lg-3")
        cardGuru.innerHTML = `
            <div class="d-flex flex-column shadow mb-4 pt-3 rounded-3">
                <div class="d-flex justify-content-center">
                    <div class="profil-image bg-secondary text-white rounded-circle mb-3">
                        ${guru.profilPic}
                    </div>
                </div>
                <div class="d-flex flex-column text-center">
                    <p class="fw-bold px-2">${guru.nama}</p>
                    <p class="m-0">${guru.jabatan}</p>
                    <p class="text-xs"><small>${guru.pengampu}</small></p>
                </div>
            </div>
        `;
        containerGuru.appendChild(cardGuru)
    })
});
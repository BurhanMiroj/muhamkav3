async function fetchDataGuruAndKaryawan() {
    const [dataGuru, dataKaryawan] = await Promise.all([
        fetch('/js/data/guru.json'),
        fetch('/js/data/karyawan.json')
    ]);

    const profilGuru = await dataGuru.json();
    const profilKaryawan = await dataKaryawan.json();

    return {
        profilGuru,
        profilKaryawan
    };
}

export default fetchDataGuruAndKaryawan;

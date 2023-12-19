var jamKedatangan = 9.30; // Ganti dengan jam kedatangan yang sesuai

// Logika kondisional
if (jamKedatangan < 9) {
    console.log("Anda datang jam " + jamKedatangan + ", maka Anda keren dan bisa mengikuti kelas.");
} else if (jamKedatangan >= 9 && jamKedatangan < 10) {
    console.log("Anda datang jam " + jamKedatangan + ", maka Anda terlambat dan bisa mengikuti kelas.");
} else {
    console.log("Anda datang jam " + jamKedatangan + ", maka Anda dianggap tidak masuk.");

    // Cek alasan
    let alasan = "sakit"; // Ganti dengan alasan yang sesuai

    if (alasan === "sakit") {
        console.log("Alasannya: lekas sembuh.");
    } else {
        console.log("Alasannya: bolos.");
    }
}
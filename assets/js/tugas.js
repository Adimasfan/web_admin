function jamkedatangan(){

    let jamKedatangan = 9.30; // Ganti dengan jam kedatangan yang sesuai

    // Logika kondisional
        if (jamKedatangan < 9) {
            alert("maka Anda keren dan bisa mengikuti kelas");
        } else if (jamKedatangan >= 9 && jamKedatangan < 10) {
            alert("maka Anda terlambat dan bisa mengikuti kelas");
        } else {
            alert("maka Anda dianggap tidak masuk");

            // Cek alasan
        let alasan = "sakit"; // Ganti dengan alasan yang sesuai

        if (alasan === "sakit") {
            alert("lekas sembuh.");
        } else {
            alert("bolos.");
        }
    }
}
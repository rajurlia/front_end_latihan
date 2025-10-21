// Fungsi untuk menentukan nilai huruf
    function konversiNilai(nilai) {
      if (nilai >= 85) return "A";
      else if (nilai >= 80) return "A-";
      else if (nilai >= 75) return "B+";
      else if (nilai >= 70) return "B";
      else if (nilai >= 65) return "B-";
      else if (nilai >= 60) return "C+";
      else if (nilai >= 55) return "C";
      else if (nilai >= 40) return "D";
      else return "E";
    }

    // Fungsi saat tombol diklik
    function kirimData() {
      const depan = document.getElementById("namaDepan").value.trim();
      const belakang = document.getElementById("namaBelakang").value.trim();

      if (depan === "" || belakang === "") {
        alert("Harap isi Nama Depan dan Nama Belakang terlebih dahulu!");
        return;
      }

      const namaLengkap = `${depan} ${belakang}`;
      const nilaiAngka = Math.floor(Math.random() * 101);
      const nilaiHuruf = konversiNilai(nilaiAngka);

      // Tampilkan hasil di halaman
      document.getElementById("output-nama").textContent = `Nama Lengkap: ${namaLengkap}`;
      document.getElementById("output-angka").textContent = `Nilai Angka: ${nilaiAngka}`;
      document.getElementById("output-huruf").textContent = `Nilai Huruf: ${nilaiHuruf}`;

      console.log(`Nama Lengkap: ${namaLengkap}, Nilai Angka: ${nilaiAngka}, Nilai Huruf: ${nilaiHuruf}`);

      // Transisi dari form ke hasil
      document.getElementById("form-section").classList.remove("active");
      document.getElementById("hasil-section").classList.add("active");
    }

    // Fungsi kembali ke form
    function kembali() {
      document.getElementById("hasil-section").classList.remove("active");
      document.getElementById("form-section").classList.add("active");
    }
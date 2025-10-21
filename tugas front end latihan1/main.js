function tampilkanNama() {
      const depan = document.getElementById("namaDepan").value.trim();
      const belakang = document.getElementById("namaBelakang").value.trim();
      const hasil = document.getElementById("hasil");

      if (depan === "" || belakang === "") {
        hasil.textContent = "Harap isi kedua nama terlebih dahulu!";
        hasil.style.color = "red";
        hasil.classList.remove("show");
        return;
      }

      const namaLengkap = `${depan} ${belakang}`;
      hasil.textContent = `Nama Lengkap: ${namaLengkap}`;
      hasil.style.color = "green";

      // Tambahkan animasi muncul
      hasil.classList.remove("show");
      void hasil.offsetWidth; // trigger reflow untuk restart animasi
      hasil.classList.add("show");

      console.log(`Nama Lengkap: ${namaLengkap}`);
    }
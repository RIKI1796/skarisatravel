"use client";

import { useEffect } from "react";
import "../styles/navbar.css";

const navbar = () => {
  useEffect(() => {
    const menuu = document.querySelectorAll(".menu-item");
    menuu.forEach((el) => {
      el.addEventListener("click", () => {
        menuu.forEach((t) => t.classList.remove("active"));
        el.classList.add("active");
      });
    });
    const hotel = document.getElementById("hotel");
    const pesawat = document.getElementById("pesawat");
    const kereta = document.getElementById("kereta");
    const bus = document.getElementById("bus");

    const setDestinasi = (
      label1,
      labelJadwal,
      showDestinasi2,
      showPenumpang,
      showKelas,
      opsi = []
    ) => {
      document.querySelector(".destinasi1 label").textContent = label1;
      document.querySelector(".jadwal label").textContent = labelJadwal;
      document.querySelector(".destinasi2").style.display = showDestinasi2
        ? "grid"
        : "none";
      document
        .querySelector(".penumpang")
        .classList.replace(
          showPenumpang ? "d-none" : "d-flex",
          showPenumpang ? "d-flex" : "d-none"
        );

      const kelas = document.querySelector(".kelas");
      showKelas
        ? kelas.classList.remove("d-none")
        : kelas.classList.add("d-none");

      opsi.forEach((item, i) => {
        const el = document.querySelector(`.destinasi2 #opsi${i + 1}`);
        if (el) {
          el.value = item.kode;
          el.textContent = `${item.kota} (${item.kode})`;
        }
      });
    };

    hotel.onclick = () => {
      setDestinasi("Lokasi", "Jadwal Menginap", false, false, false);
    };

    pesawat.onclick = () => {
      setDestinasi("Dari", "Jadwal Pergi", true, true, true, [
        { kota: "Singapore", kode: "SIN" },
        { kota: "Kuala Lumpur", kode: "KUL" },
        { kota: "Jakarta", kode: "JKA" },
        { kota: "Denpasar", kode: "DNPSR" },
        { kota: "Bangkok", kode: "BNGK" },
      ]);
    };

    kereta.onclick = () => {
      setDestinasi("Dari", "Jadwal Pergi", true, true, true, [
        { kota: "Bandung", kode: "BDG" },
        { kota: "Surabaya", kode: "SBY" },
        { kota: "Semarang", kode: "SMRG" },
        { kota: "Yogyakarta", kode: "YGKRT" },
        { kota: "Krian", kode: "KRN" },
      ]);
    };

    bus.onclick = () => {
      setDestinasi("Dari", "Jadwal Pergi", true, true, false, [
        { kota: "Bandung", kode: "BDG" },
        { kota: "Surabaya", kode: "SBY" },
        { kota: "Semarang", kode: "SMRG" },
        { kota: "Yogyakarta", kode: "YGKRT" },
        { kota: "Krian", kode: "KRN" },
      ]);
    };
  }, []);
  return (
    <>
      <nav>
        <i className="bi bi-airplane"></i>
        <h1 className="judul">SKARISATravel</h1>
        <h2>Pesanan</h2>
      </nav>
      <div className="menu">
        <div id="hotel" className="menu-item hotel">
          <h2 className="hotelT">Hotel</h2>
          <i className="bi bi-building-fill"></i>
        </div>
        <div id="pesawat" className="menu-item active pesawat">
          <h2 className="pesawatT">Tiket Pesawat</h2>
          <i className="bi bi-airplane-fill"></i>
        </div>
        <div id="kereta" className="menu-item kereta">
          <h2 className="keretaT">Tiket Kereta Api</h2>
          <i className="bi bi-train-front-fill"></i>
        </div>
        <div id="bus" className="menu-item bus">
          <h2 className="busT">Tiket Bus</h2>
          <i className="bi bi-bus-front"></i>
        </div>
      </div>
    </>
  );
};

export default navbar;

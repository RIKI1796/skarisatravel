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

    hotel.onclick = () => {
      document.querySelector(".destinasi1 label").textContent = "Lokasi";
      document.querySelector(".destinasi2").style.display = "none";
      document.querySelector(".jadwal label").textContent = "Jadwal Menginap";
      document
        .querySelector(".penumpang")
        .classList.replace("d-flex", "d-none");
    };
    pesawat.onclick = () => {
      document.querySelector(".kelas").classList.remove("d-none");
      document.querySelector(".destinasi1 label").textContent = "Dari";
      document.querySelector(".destinasi2").style.display = "grid";
      document.querySelector(".jadwal label").textContent = "Jadwal Pergi";
      document
        .querySelector(".penumpang")
        .classList.replace("d-none", "d-flex");
      document.querySelector(".destinasi2 #opsi1").value = "SIN";
      document.querySelector(".destinasi2 #opsi2").value = "KUL";
      document.querySelector(".destinasi2 #opsi3").value = "JKA";
      document.querySelector(".destinasi2 #opsi4").value = "DNPSR";
      document.querySelector(".destinasi2 #opsi5").value = "BNGK";
      document.querySelector(".destinasi2 #opsi1").textContent =
        "Singapore (SIN)";
      document.querySelector(".destinasi2 #opsi2").textContent =
        "Kuala Lumpur (KUL)";
      document.querySelector(".destinasi2 #opsi3").textContent =
        "Jakarta (JKTA)";
      document.querySelector(".destinasi2 #opsi4").textContent =
        "Denpasar (DNPSR)";
      document.querySelector(".destinasi2 #opsi5").textContent =
        "Bangkok (BGK)";
    };
    kereta.onclick = () => {
      document.querySelector(".kelas").classList.remove("d-none");
      document.querySelector(".destinasi1 label").textContent = "Dari";
      document.querySelector(".jadwal label").textContent = "Jadwal Pergi";
      document.querySelector(".destinasi2").style.display = "grid";
      document
        .querySelector(".penumpang")
        .classList.replace("d-none", "d-flex");
      document.querySelector(".destinasi2 #opsi1").value = "BDG";
      document.querySelector(".destinasi2 #opsi2").value = "SBY";
      document.querySelector(".destinasi2 #opsi3").value = "SMRG";
      document.querySelector(".destinasi2 #opsi4").value = "YGKRT";
      document.querySelector(".destinasi2 #opsi5").value = "KRN";
      document.querySelector(".destinasi2 #opsi1").textContent =
        "Bandung (BDG)";
      document.querySelector(".destinasi2 #opsi2").textContent =
        "Surabaya (SBY)";
      document.querySelector(".destinasi2 #opsi3").textContent =
        "Semarang (SMRG)";
      document.querySelector(".destinasi2 #opsi4").textContent =
        "Yogyakarta (YGKRT)";
      document.querySelector(".destinasi2 #opsi5").textContent = "Krian (KRN)";
    };
    bus.onclick = () => {
      document.querySelector(".kelas").classList.add("d-none");
      document.querySelector(".destinasi2").style.display = "grid";
      document.querySelector(".jadwal label").textContent = "Jadwal Pergi";
      document
        .querySelector(".penumpang")
        .classList.replace("d-none", "d-flex");
      document.querySelector(".destinasi1 label").textContent = "Dari";
      document.querySelector(".destinasi2 #opsi1").value = "BDG";
      document.querySelector(".destinasi2 #opsi2").value = "SBY";
      document.querySelector(".destinasi2 #opsi3").value = "SMRG";
      document.querySelector(".destinasi2 #opsi4").value = "YGKRT";
      document.querySelector(".destinasi2 #opsi5").value = "KRN";
      document.querySelector(".destinasi2 #opsi1").textContent =
        "Bandung (BDG)";
      document.querySelector(".destinasi2 #opsi2").textContent =
        "Surabaya (SBY)";
      document.querySelector(".destinasi2 #opsi3").textContent =
        "Semarang (SMRG)";
      document.querySelector(".destinasi2 #opsi4").textContent =
        "Yogyakarta (YGKRT)";
      document.querySelector(".destinasi2 #opsi5").textContent = "Krian (KRN)";
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

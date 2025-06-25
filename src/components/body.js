import React from "react";
import "../styles/body.css";

const body = () => {
  return (
    <>
      <section
        className="penumpang d-flex gap-5 justify-content-center mt-4"
        style={{ marginLeft: "400px" }}
      >
        <select
          className="border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.247)",
            borderRadius: "5px",
          }}
        >
          <option>1 Dewasa, 0 Anak, 0 Bayi</option>
        </select>
        <select
          className="border kelas"
          style={{
            width: "20dvh",
            paddingLeft: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.247)",
            borderRadius: "5px",
          }}
        >
          <option>💺 Economy</option>
          <option>💼 Business</option>
          <option>👑 First Class</option>
        </select>
      </section>
      <section className="destinasi">
        <div className="destinasi1">
          <label>Dari</label>
          <select>
            <option value="JKA">Jakarta(JKTA)</option>
            <option value="SBY">Surabaya (SBY)</option>
            <option value="DNPSR">Denpasar (DNPSR)</option>
            <option value="BNDG">Bandung (BDG)</option>
            <option value="SMRG">Semarang (SMRG)</option>
          </select>
        </div>
        <div className="destinasi2">
          <label>Ke</label>
          <select>
            <option id="opsi1" value="SIN">
              Singapore (SIN)
            </option>
            <option id="opsi2" value="KUL">
              Kuala Lumpur (KUL)
            </option>
            <option id="opsi3" value="JKA">
              Jakarta (JKTA)
            </option>
            <option id="opsi4" value="DNPSR">
              Denpasar (DNPSR)
            </option>
            <option id="opsi5" value="BNGK">
              Bangkok (BGK)
            </option>
          </select>
        </div>
        <section className="jadwal">
          <label>Jadwal Pergi</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
          ></input>
        </section>
      </section>
    </>
  );
};

export default body;

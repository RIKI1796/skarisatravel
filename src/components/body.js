import React from "react";
import "../styles/body.css";

const body = () => {
  return (
    <>
      <section className="destinasi">
        <div className="destinasi1">
          <label>Dari</label>
          <select>
            <option value="JKA">Jakarta(JKTA)</option>
            <option value="SBY">Surabaya (SBY)</option>
            <option value="DNPSR">Denpasar (DNPSR)</option>
            <option value="BNDG">Bandung (BNDG)</option>
            <option value="SMRG">Semarang (SMRG)</option>
          </select>
        </div>
        <div className="destinasi2">
          <label>Ke</label>
          <select>
            <option value="SIN">Singapore(SIN)</option>
            <option value="KUL">Kuala Lumpur (KUL)</option>
            <option value="JKA">Jakarta (JKTA)</option>
            <option value="DNPSR">Denpasar (DNPSR)</option>
            <option value="BNGK">Bangkok (BNGK)</option>
          </select>
        </div>
      <section className="jadwal">
        <label>Jadwal Pergi</label>
        <input type="date" defaultValue={new Date().toISOString().split("T")[0]}></input>
      </section>
      </section>
    </>
  );
};

export default body;

import React from "react";
import "../styles/body.css";

const destinasi1Options = [
  { value: "JKA", label: "Jakarta (JKTA)" },
  { value: "SBY", label: "Surabaya (SBY)" },
  { value: "DNPSR", label: "Denpasar (DNPSR)" },
  { value: "BNDG", label: "Bandung (BDG)" },
  { value: "SMRG", label: "Semarang (SMRG)" },
];

const destinasi2Options = [
  { value: "SIN", label: "Singapore (SIN)" },
  { value: "KUL", label: "Kuala Lumpur (KUL)" },
  { value: "JKA", label: "Jakarta (JKTA)" },
  { value: "DNPSR", label: "Denpasar (DNPSR)" },
  { value: "BNGK", label: "Bangkok (BGK)" },
];

const kelasOptions = [
  "💺 Economy",
  "💼 Business",
  "👑 First Class",
];

const Body = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="penumpang d-flex gap-5 justify-content-center mt-4 ml-custom">
        <select className="custom-select">
          <option>1 Dewasa, 0 Anak, 0 Bayi</option>
        </select>
        <select className="custom-select kelas">
          {kelasOptions.map((kelas, i) => (
            <option key={i}>{kelas}</option>
          ))}
        </select>
      </section>

      <section className="destinasi">
        <div className="destinasi1">
          <label>Dari</label>
          <select>
            {destinasi1Options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="destinasi2">
          <label>Ke</label>
          <select>
            {destinasi2Options.map((opt, i) => (
              <option key={i} value={opt.value} id={`opsi${i + 1}`}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <section className="jadwal">
          <label>Jadwal Pergi</label>
          <input type="date" defaultValue={today} />
        </section>
      </section>
    </>
  );
};

export default Body;

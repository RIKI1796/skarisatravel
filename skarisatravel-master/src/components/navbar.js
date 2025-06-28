"use client";

import { useEffect } from "react";
import "../styles/navbar.css";

const navbar = () => {
  useEffect(() => {
    const menuu = document.querySelectorAll(".menu-item");
     menuu.forEach((el) => {
      el.addEventListener("click", () => {
        menuu.forEach(t => t.classList.remove("active"));
        el.classList.add("active");
      })
     })

    
  }, []);
  return (
    <>
      <nav>
        <i className="bi bi-airplane"></i>
        <h1 className="judul">SKARISATravel</h1>
      </nav>
      <div className="menu">
        <div id="hotel" className="menu-item hotel">
          <h2 className="hotelT">Hotel</h2>
          <i className="bi bi-building-fill"></i>
        </div>
        <div id="pesawat" className="menu-item active pesawat">
          <h2 className="pesawatT">Tiket Pesawat</h2>
          <i className="bi bi-airplane"></i>
        </div>
        <div id="kereta" className="menu-item kereta">
          <h2 className="keretaT">Tiket Kereta Api</h2>
          <i className="bi bi-train-front-fill"></i>
        </div>
        <div id="bus" className="menu-item bus">
          <h2 className="busT">Tiket Bus</h2>
          <i className="bi bi-bus-front"></i>
        </div>
        <div id="source" className="menu-item source">
          <h2 className="sourceT">Source1</h2>
          <i className="bi bi-building-fill"></i>
        </div>
         <div id="source" className="menu-item active pesawat">
          <h2 className="pesawatT">Source2</h2>
          <i className="bi bi-airplane"></i>
        </div>
        <div id="source" className="menu-item source">
          <h2 className="sourceT">Source3</h2>
          <i className="bi bi-train-front-fill"></i>
        </div>  
        <div id="source" className="menu-item source">
          <h2 className="sourceT">Source4</h2>
          <i className="bi bi-bus-front"></i>
        </div>
      </div> 
    </>
  );
};

export default navbar;

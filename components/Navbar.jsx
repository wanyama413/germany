import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full h-[4.5rem] p-5">
      <div className="flex justify-between items-center w-[40%]">
        <div className="w-[150px]">
          <img src="/logo RGB-01.png" alt="" />
        </div>

        <ul className="flex justify-evenly items-center w-[80%]">
          <li> Stelle suchen</li>
          <li>Fachkräfte suchen</li>
        </ul>
      </div>

      <ul className="flex justify-between items-center w-[25%]">
        <li>Für Arbeitgeber</li>
        <li>Login/Registrierung</li>
      </ul>
    </header>
  );
}

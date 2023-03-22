import React from "react";

function Navbar() {
  const navbarItems = ["Home", "About", "Summary", "Contact Us"];

  return (
    <div className=" bg-slate-100 d-flex justify-content-center align-items-center gap-2 p-4">
      {navbarItems.map((item, index) => (
        <ul key={index}>
          <li className=" btn btn-primary ">{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default Navbar;

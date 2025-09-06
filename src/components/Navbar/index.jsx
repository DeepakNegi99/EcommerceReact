import React from "react";

const Navbar = () => {
  return (
    <header className="flex">
      <div>
        <h1>Online Shopping</h1>
      </div>
      <nav>
        <span className="material-icons-outlined">favoutite</span>
        <span className="material-icons-outlined">Shopping_cart</span>
        <span className="material-icons-outlined">account_circle</span>
      </nav>
    </header>
  );
};

export default Navbar;

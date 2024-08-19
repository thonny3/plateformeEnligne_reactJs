import React, { useState } from "react";
import { Link ,useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center w-[96%] mx-auto shadow-sm h-14">
        <div>Logo</div>
        <div>
          <ul className="flex items-center gap-[6vw]">
          <li>
              <Link
                to="/home"
                className="text-gray-700 text-sm"
              >
                Acceuil
              </Link>
            </li>
    
            <li>
              <a href="" className="text-gray-700  text-sm">
                A propos
              </a>
            </li>
            <li>
              <a href="" className="text-gray-700 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-[#a6c1ee] text-white px-4 py-2  rounded-full hover:bg-[#40d3e1] text-sm mr-5">
            <Link to="/connexion">Se connecter</Link>
          </button>
          <button className="bg-[#40d3e1] text-white px-6 py-2 rounded-full  hover:bg-[#a6c1ee] text-sm">
            <Link to="/registre">S' inscrire</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

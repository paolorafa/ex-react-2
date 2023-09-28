import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h1>La pagina cercata non esiste</h1>
      <button>
        <Link to="/">Torna alla pagina principale</Link>
      </button>
    </div>
  );
};

export default Errorpage;

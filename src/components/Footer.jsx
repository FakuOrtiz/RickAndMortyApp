import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Developed by Facundo Ortiz
        <a href="https://www.linkedin.com/in/facundortiz/" target="_blank" className="fa-brands fa-linkedin linkedin"/>
        <a href="https://github.com/FakuOrtiz" target="_blank" className="fa-brands fa-github github" />
      </p>
      <p>Copyright © 2022</p>
    </footer>
  );
}

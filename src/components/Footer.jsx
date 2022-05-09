import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Developed by Facundo Ortiz{" "}
        <a href="https://www.instagram.com/fakuortiz31/" target="_blank" className="fa-brands fa-instagram instagram" />
        <a href="https://twitter.com/FakuOrtiz31" target="_blank" className="fa-brands fa-twitter twitter" />
        <a href="https://www.linkedin.com/in/facundo-agustin-ortiz-gomez/" target="_blank" className="fa-brands fa-linkedin linkedin"/>
      </p>
      <p>Copyright © 2022</p>
    </footer>
  );
}

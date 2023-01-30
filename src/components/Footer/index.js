import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h1>Mulpuri Sai Akhil</h1>
          <p className="designation">Frontend Developer.</p>
        </div>

        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <a href="https://www.linkedin.com/in/akhil-mulpuri-94634b166/">
              <li>LinkedIn</li>
            </a>
            <a href="https://www.facebook.com/SaiAkhilMulpz/">
              <li>Facebook</li>
            </a>
            <a href="https://twitter.com/FartVader02">
              <li>Twitter</li>
            </a>
            <a href="https://www.youtube.com/channel/UC5r8Fd1h17Eb-7Mong-ff4g">
              <li>Youtube</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h3>More Links</h3>
          <div className="border1"></div>
          <ul>
            <a href="https://github.com/akhilmulpurii">
              <li>GitHub</li>
            </a>
            <a href="https://stackoverflow.com/users/10244850/akhil-mulpuri">
              <li>Stack Overflow</li>
            </a>
            <a href="https://dev.to/akhilmulpurii">
              <li>Dev.io</li>
            </a>
            <a href="https://medium.com/@akhilfilms02">
              <li>Medium</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h3>Contact me</h3>
          <div className="border1"></div>
          <ul>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>Edmond,
              Oklahoma - 73034
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>+1 4058568154
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              reachme@akhil.pro
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Akhil Mulpuri {new Date().getFullYear()}.
      </div>
    </section>
  );
}

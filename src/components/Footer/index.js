import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <InnerFooter>
        <FooterItem>
          <h1>Mulpuri Sai Akhil</h1>
          <p className="designation">Frontend Developer.</p>
        </FooterItem>

        <FooterItem>
          <h3>Quick Links</h3>
          <FooterBorder />
          <FooterList>
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
          </FooterList>
        </FooterItem>

        <FooterItem>
          <h3>More Links</h3>
          <FooterBorder />
          <FooterList>
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
          </FooterList>
        </FooterItem>

        <FooterItem>
          <h3>Contact me</h3>
          <FooterBorder />
          <ul>
            <li>Edmond, Oklahoma - 73034</li>
            <li>+1 4058568154</li>
            <li>reachme@akhil.pro</li>
          </ul>
        </FooterItem>
      </InnerFooter>

      <FooterBottom>
        Made with ❤️ by Akhil Mulpuri, {new Date().getFullYear()}.
      </FooterBottom>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  width: 100%;
  background: #0e0e0e;
  display: block;
  @media screen and (max-width: 660px) {
    text-align: center !important;
  }
`;

const InnerFooter = styled.div`
  width: 95%;
  margin: auto;
  padding: 30px 10px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

const FooterItem = styled.div`
  width: 25%;
  padding: 10px 20px;
  box-sizing: border-box;
  color: #fff;

  & p {
    font-size: 16px;
    text-align: justify;
    line-height: 25px;
    color: #fff;
  }

  & h1 {
    color: #fff;
  }

  & li {
    margin: 10px 0;
    height: 25px;
  }

  & ul {
    list-style: none;
  }

  @media screen and (max-width: 1275px) {
    width: 50%;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
    & .designation {
      text-align: center;
      margin-top: 10px;
    }
  }
`;

const FooterBorder = styled.div`
  height: 3px;
  width: 40px;
  background: #ff9800;
  color: #ff9800;
  background-color: #ff9800;
  border: 0px;
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const FooterBottom = styled.div`
  padding: 10px;
  background: #131313;
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

const FooterList = styled.ul`
  list-style: none;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.5px;

  & a {
    text-decoration: none;
    outline: none;
    color: #fff;
    transition: 0.3s;
  }

  & a:hover {
    color: #ff9800;
  }

  & li {
    margin: 10px 0;
    height: 25px;
  }
`;

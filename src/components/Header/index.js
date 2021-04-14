import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navigate } from "gatsby-link";
import logoIcon from "../../images/favicon.png";
import scrollTo from "gatsby-plugin-smoothscroll";

// markup
const Header = () => {
  const [mode, setMode] = React.useState("dark");

  React.useEffect(() => {
    function handleBackgroundChange() {
      const newMode = window.scrollY < 240 ? "dark" : "light";
      setMode(newMode);
    }
    window.addEventListener("scroll", handleBackgroundChange);
    return () => {
      window.removeEventListener("scroll", handleBackgroundChange);
    };
  }, []);

  return (
    <NavBar backgroundColor={mode === "dark" ? "transparent" : "#fff"}>
      <WidthFixer>
        <Logo
          alt="logo"
          onClick={() => navigate("/")}
          src={logoIcon}
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        />
        <List color={mode === "dark" ? "#fff" : "#141414"}>
          <ListItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/projects")}
          >
            Portfolio
          </ListItem>
          <ListItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (window?.location?.pathname === "/") {
                scrollTo("#about");
              } else {
                navigate("/#about");
              }
            }}
          >
            About Me
          </ListItem>
          <ListItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (window?.location?.pathname === "/") {
                scrollTo("#contact");
              } else {
                navigate("/#contact");
              }
            }}
          >
            Contact
          </ListItem>
        </List>
      </WidthFixer>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.nav`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  padding: 15px 0;
  position: sticky;
  top: 0;
  transition: background-color 200ms linear;
  z-index: 9999999;
`;

const Logo = styled(motion.img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

const WidthFixer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding: 0 20px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  color: ${({ color }) => (color ? color : "#fff")};
  transition: color 200ms linear;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled(motion.li)`
  padding: 0 0 0 24px;
  font-weight: 600;
  cursor: pointer;
  margin: 0;
  height: auto;
`;

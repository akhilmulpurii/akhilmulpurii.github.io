import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// markup
const Header = () => {
  const router = useRouter();
  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <NavBar backgroundColor={"#fff"}>
      <WidthFixer>
        <LogoFlex
          onClick={() => router.push("/")}
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <Logo alt="logo" src={"/images/favicon.png"} />
          <b>Akhil Mulpuri</b>
        </LogoFlex>
        <List color={"#030d03"}>
          <ListItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/blogs")}
          >
            Blog
          </ListItem>
          <ListItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/contact")}
          >
            Contact
          </ListItem>
        </List>
      </WidthFixer>
    </NavBar>
  );
};

export default Header;

const LogoFlex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & b {
    font-size: 24px;
    user-select: none;
    @media (max-width: 890px) {
      display: none;
    }
  }
`;

const NavBar = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  padding: 15px 0;
  position: sticky;
  top: 0;
  transition: background-color 200ms linear;
  z-index: 9999999;
`;

const Logo = styled.img`
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
  margin-right: 10px;
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

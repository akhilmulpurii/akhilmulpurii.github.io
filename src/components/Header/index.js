import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// markup
const Header = () => {
  const [mode, setMode] = React.useState("dark");
  const router = useRouter();
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

  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="header-nav"
      style={{ backgroundColor: mode === "dark" ? "transparent" : "#fff" }}
    >
      <div className="header-width-fixer">
        <motion.img
          className="header-logo"
          alt="logo"
          onClick={() => router.push("/")}
          src={"/images/favicon.png"}
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        />
        <ul
          className="header-list"
          style={{ color: mode === "dark" ? "#fff" : "#141414" }}
        >
          <motion.li
            className="header-nav-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/projects")}
          >
            Portfolio
          </motion.li>
          <motion.li
            className="header-nav-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (router.pathname === "/") {
                scrollTo("#about");
              } else {
                router.push("/#about");
              }
            }}
          >
            About Me
          </motion.li>
          <motion.li
            className="header-nav-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (router.pathname === "/") {
                scrollTo("#contact");
              } else {
                router.push("/#contact");
              }
            }}
          >
            Contact
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import { motion } from "framer-motion";
import * as React from "react";

const DownloadLinks = ({
  background,
  web_url,
  appstore_url,
  playstore_url,
}) => {
  if (!web_url && !appstore_url && !playstore_url) return <></>;
  return (
    <motion.section
      className="download-links-container"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
      style={{ background }}
    >
      <div className="download-links-wrapper">
        <motion.div
          className="download-links-text"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Want to check out the app? Use the links below!
        </motion.div>
        <div className="download-links-button-container">
          {!!web_url && (
            <a href={web_url} className="download-link-url">
              <div className="small">Check out the</div>
              <div className="large">Web Application</div>
            </a>
          )}
          {!!appstore_url && (
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href={appstore_url}
            >
              <img className="app-badge" src={"/images/appstore-badge.png"} />
            </a>
          )}
          {!!playstore_url && (
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href={playstore_url}
            >
              <img className="app-badge" src={"/images/playstore-badge.png"} />
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default DownloadLinks;

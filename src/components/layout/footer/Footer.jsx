import React from "react";

const Footer = () => {
  return (
    <footer className="py-1" style={{ backgroundColor: "#232f3e" }}>
      <p className="text-center text-white mt-1">
        <span
          style={{
            fontWeight: "700",
            color: "#febd69",
            borderRight: "1px solid #8f8f8f",
            paddingRight: "2px",
          }}
        >
          N
        </span>
        <span
          style={{
            fontWeight: "700",
            paddingLeft: "2px",
            paddingRight: "4px",
          }}
        >
          STORE
        </span>
        All Rights Reserved &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

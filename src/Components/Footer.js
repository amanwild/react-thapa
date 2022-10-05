import React from "react";
function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <>
      <footer className="stickey-bottom bg-dark text-center text-white" >
        CopyRights © Reserved {year}
      </footer>

    </>
  );
}

export default Footer;
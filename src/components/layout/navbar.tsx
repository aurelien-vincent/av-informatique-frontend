import React from "react";
import Image from "next/image";

import Styles from "../../styles/NavBar.module.css";
function NavBar() {
  return (
    <div className={Styles.navcontainer}>
      <Image src="/Logo.png" alt="Logo" width={150} height={150} />
      <nav className={Styles.navcontainer}></nav>;
    </div>
  );
}

export default NavBar;

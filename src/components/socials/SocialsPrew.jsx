import React from "react";
import styles from "./socialsPrewStyles.module.css";
import telegram from "../../img/svg/telegram.svg"
import fb from "../../img/svg/fb.svg"
import instagram from "../../img/svg/instagram.svg"

function SocialsPrew() {
    return (
      <div className={styles.socials}>
        <img className={styles.vector} src={telegram} />
        <img className={styles.vector} src={fb} />
        <img className={styles.vector} src={instagram} />
      </div>
    );
  };
export default SocialsPrew
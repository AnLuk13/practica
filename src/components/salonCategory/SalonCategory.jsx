import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./salonCategoryStyle.module.css";

function SalonCategory({ name, imageUrl }) {
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    navigate(`/category/${name}`);
  };

  return (
    <div onClick={goToCategoryPage}>
      <div className={styles.card}>
        <p className={styles.card_desc}>{name}</p>
        <img className={styles.card_img} src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default SalonCategory;

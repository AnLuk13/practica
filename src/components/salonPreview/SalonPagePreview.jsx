import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./salonPreviewStyles.module.css";

function SalonPagePreview({ salon }) {
  const navigate = useNavigate();

  const goToSalonPage = () => {
    navigate(`/salon/${salon.id}`);
  };

  return (
    <div className={styles.card} onClick={goToSalonPage}>
      <img className={styles.previewImage} src={salon.imageUrl} alt="" />
      <h3>{salon.name}</h3>
    </div>
  );
}

export default SalonPagePreview;

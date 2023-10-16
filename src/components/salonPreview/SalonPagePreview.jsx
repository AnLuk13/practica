import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./salonPreviewStyles.module.css";
import RowBox from "../../assets/svgs/RowBox";

function SalonPagePreview({ salon }) {
  const navigate = useNavigate();

  const goToSalonPage = () => {
    navigate(`/salon/${salon.id}`);
  };

  return (
    <div className={styles.card}  onClick={goToSalonPage}>
      <div className={styles.cardContent}>
        <div className={styles.images}>
          <img className={styles.previewImage} src={salon.imageUrl} alt="" />
        </div> 
        <p className={styles.name}>{salon.name}</p>
        <div className={styles.servicesBox}>
          <p className={styles.services}>{salon?.services.map((service) => {
              return <div>· {service}</div>;
            })}
          </p>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.openButtonBlue}>
            <div className={styles.rowBox}><RowBox /></div>
              <div className={styles.textWrapper}>Open</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalonPagePreview;

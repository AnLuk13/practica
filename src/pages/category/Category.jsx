import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSalons } from "../../services/salons";
import SalonPagePreview from "../../components/salonPreview/SalonPagePreview";
import Navbar from "../../components/navbar/NavBar";
import styles from "./categoryStyle.module.css";

function Category() {
  const params = useParams();
  console.log(params);

  const { id } = params;

  const [salons, setSalon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getSalons()
        .then((res) => {
          const filteredCategories = res.map((e) => {
            if (e.services.includes(id)) {
              return e;
            }
          });
          setSalon(filteredCategories);
        })
        .catch((e) => {
          console.log("ERR:" + e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <div className={styles.category}>
      <Navbar />
      <div className={styles.chooseBox}>
        <p className={styles.choose}>Let's choose the best place</p>
      </div>
      {isLoading && <div>Loading...</div>}
      {salons.length ? (
        <div className={styles.categoriesWrapper}>
          {salons.map((salon) => {
            return salon ? (
              <SalonPagePreview key={salon.id} salon={salon} />
            ) : null;
          })}
        </div>
      ) : (
        <div>No salons available</div>
      )}
    </div>
  );
}

export default Category;

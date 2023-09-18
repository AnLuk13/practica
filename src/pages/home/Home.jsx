import Navbar from "../../components/navbar/NavBar";
import { servicesEnum } from "../../constants/common";
import SalonCategory from "../../components/salonCategory/SalonCategory";
import RowDown from "../../assets/svgs/RowDown";
import styles from "./homeStyle.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div>
        <p className={styles.welcome__title}>Hi there.</p>
        <p className={styles.welcome__desc}>Choose your service</p>
        <RowDown />
      </div>

      <div className={styles.categoryWrapper}>
        {Object.values(servicesEnum).map((service) => {
          return (
            <SalonCategory imageUrl={service.imageUrl} name={service.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

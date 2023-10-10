import Navbar from "../../components/navbar/NavBar";
import styles from "./aboutUsStyle.module.css";
import Star from "../../assets/svgs/Star";
import RowDown2 from "../../assets/svgs/RowDown2";
import SocialsPrew from "../../components/socials/SocialsPrew";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Navbar />
      <div className={styles.frame}>
        <div className={styles.div}>
          <div className={styles.text}>
            Something catchy about us.
          </div>
          <p className={styles.p}>
            We are a company that provides a unique range of online appointment services ranging from hair and beard cuts
            at various hairdressers and barbershops to amazing and variative tattoo parlor appointments.
          </p>
        </div>
        <div className={styles.div2}>
          <div className={styles.box}>
            <div className={styles.star}>
              <Star />
            </div> 
          </div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.text2}>
          Check our socials
        </div>
        <RowDown2 />
        <SocialsPrew />
      </div>
    </div>
  );
}

export default AboutUs;

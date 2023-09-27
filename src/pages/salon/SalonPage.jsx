import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSalonById } from "../../services/salons";
import Navbar from "../../components/navbar/NavBar";
import styles from "./salonPageStyles.module.css";
import callSvg from "../../img/svg/call.svg";
import telegram from "../../img/svg/telegram.svg";
import mail from "../../img/svg/mail.svg";

function SalonPage() {
  const params = useParams();

  const { id } = params;

  const [salon, setSalon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const defaultDate = "2023-01-01";

  const [dateValue, setDateValue] = useState(defaultDate);

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getSalonById(id)
        .then((res) => {
          setSalon(res);
        })
        .catch((e) => {
          console.log("ERR:" + e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <div className={styles.salonPage}>
      {salon ? (
        <div>
          <Navbar />
          <div className={styles.content}>
            <div className={styles.optionsBox}>
              <div className={styles.appointmentTitle}>
                Now some options for appointment.
              </div>
              <div className={styles.timeBox}>
                <div className={styles.chooseText}>Choose the best time:</div>
                <div className={styles.dateTime}>
                  <input
                    className={styles.dateInput}
                    type="date"
                    value={dateValue}
                    onChange={handleDateChange}
                  />
                  <div className={styles.selectionContainer}>
                    {salon?.branches.map((branch) => {
                      return (
                        <div>
                          {branch?.workingSchedule?.map((ws) => {
                            return (
                              <select className={styles.selectionTime}>
                                {Object.entries(ws).map(([day, time]) => {
                                  return (
                                    <option className={styles.option} value="">
                                      {day} {time}
                                    </option>
                                  );
                                })}
                              </select>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.chooseText}>Choose your service:</div>
                <div className={styles.selectionContainer}>
                  <select className={styles.selection}>
                    {salon?.services.map((service) => {
                      return <option>{service}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button}>Appoint</button>
                <button className={styles.button}>
                  Call <img className={styles.callSvg} src={callSvg} alt="" />
                </button>
              </div>
            </div>
            <div className={styles.informationBox}>
              <div className={styles.informationContentBox}>
                <div className={styles.informationImageBox}>
                  <img
                    className={styles.informationImage}
                    src={salon.imageUrl}
                    alt=""
                  />
                </div>
                <div className={styles.informationTextBox}>
                  <div className={styles.locations}>
                    <div className={styles.locationTitle}>Locations:</div>
                    <div className={styles.salonName}>{salon.name}</div>
                    <ul className={styles.ul}>
                      {salon?.branches.map((branch) => {
                        return (
                          <li className={styles.sector}>
                            {branch?.address?.district}
                            <div className={styles.address}>
                              {branch?.address?.street}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.socialLinks}>
                    {salon?.branches.map((branch) => {
                      return (
                        <>
                          <a href="tel: + {branch?.contact?.phone}">
                            <img src={telegram} alt="" />
                          </a>
                          <a href="mailto: + {branch?.contact?.email}">
                            <img src={mail} alt="" />
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Not salon with such id!</div>
      )}
    </div>
  );
}

export default SalonPage;

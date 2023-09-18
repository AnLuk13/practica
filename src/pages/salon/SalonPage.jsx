import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSalonById } from "../../services/salons";
import Navbar from "../../components/navbar/NavBar";
import styles from "./salonPageStyles.module.css";

function SalonPage() {
  const params = useParams();

  const { id } = params;

  const [salon, setSalon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {salon ? (
        <div>
          <Navbar />
          <h1>Salon page</h1>
          <div className={styles.salonMain}>
            <h2>{salon.name}</h2>
            <img className={styles.salonImage} src={salon.imageUrl} alt="" />
            <p>{salon.description}</p>
          </div>
          <h2>Branches:</h2>

          {salon?.branches.map((branch) => {
            return (
              <div>
                <div>District: {branch?.address?.district}</div>
                <div>Street: {branch?.address?.street}</div>
                <div>Email: {branch?.contact?.email}</div>
                <div>Phone: {branch?.contact?.phone}</div>
                {branch?.workingSchedule?.map((ws) => {
                  return (
                    <div>
                      {Object.entries(ws).map(([day, time]) => {
                        return (
                          <div>
                            {day}={time}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <h2>Services:</h2>
          {salon?.services.map((service) => {
            return <div>{service}</div>;
          })}
        </div>
      ) : (
        <div>Not salon with such id!</div>
      )}
    </>
  );
}

export default SalonPage;

import PropTypes from "prop-types";
import styles from "./Ccafabfdabbmexicohomemi.module.css";

const Ccafabfdabbmexicohomemi = ({ className = "" }) => {
  return (
    <section className={[styles.ccafabfdabbmexicohomemi, className].join(" ")}>
      <h1 className={styles.whyYatriContainer}>
        <span className={styles.whyYatriContainer1}>
          <span>
            <span className={styles.why}>Why</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.yatri}>
            <span>Yatri</span>
            <span className={styles.span1}> ?</span>
          </span>
        </span>
      </h1>
      <img
        className={styles.carrentalagra1Icon}
        loading="lazy"
        alt=""
        src="/carrentalagra-1@2x.png"
      />
      <div className={styles.itemLink}>
        <div className={styles.bdafabfaaceaeanycjpg}>
          <div className={styles.reasonOne}>
            <img
              className={styles.newYorkCity}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.itemLink1}>
              <div className={styles.fastResponseTime}>Fast response time</div>
              <div className={styles.availBestCar}>
                Avail Best Car Rental Service in Lucknow with driver for Local
                or Outstation within the moment of your call for best car hire
                experience.
              </div>
            </div>
          </div>
          <div className={styles.peru}>
            <img
              className={styles.peruChild}
              loading="lazy"
              alt=""
              src="/group-1686551840.svg"
            />
            <div className={styles.saintLucia}>
              <h3 className={styles.easyToOrder}>Easy to order</h3>
              <div className={styles.easilyBookCab}>
                Easily Book Cab Online with our website or call our customer
                support team.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eabcfcbafddfwashingtonjpg}>
          <div className={styles.vastFleetDescription}>
            <img
              className={styles.vuesaxlinearpeopleIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearpeople.svg"
            />
            <div className={styles.travelsafepng}>
              <b className={styles.vastFleet}>Vast fleet</b>
              <div className={styles.weHaveAll}>
                We have all kinds of Car on Rent available like Sedan, Suv, Muv,
                Premium Sedan, Tampo Traveller etc as per ur requirement
              </div>
            </div>
          </div>
          <div className={styles.paidParent}>
            <img
              className={styles.paidIcon}
              loading="lazy"
              alt=""
              src="/paid.svg"
            />
            <div className={styles.eadafaefbaeedbaebc}>
              <b className={styles.greatTariffs}>Great tariffs</b>
              <div
                className={styles.rentACar}
              >{`Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental. `}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Ccafabfdabbmexicohomemi.propTypes = {
  className: PropTypes.string,
};

export default Ccafabfdabbmexicohomemi;

import PropTypes from "prop-types";
import styles from "./OneWayBenefits.module.css";

const OneWayBenefits = ({ className = "" }) => {
  return (
    <section className={[styles.oneWayBenefits, className].join(" ")}>
      <div className={styles.returnFareSeparator}>
        <div className={styles.availableRoutesList}>
          <div className={styles.returnFareDescription}>
            <div className={styles.returnFareDescriptionInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1000001863.svg"
              />
            </div>
            <div className={styles.returnFareTitle}>
              <h2 className={styles.returnFareNot}>Return Fare, Not Fair!</h2>
            </div>
            <p className={styles.whyPayFor}>
              Why Pay for Return Journey when you are travelling one-way? Now
              get discounted AC Taxi at just half of the round trip cost for
              your one-way travel.
            </p>
          </div>
        </div>
        <div className={styles.heading} />
        <div className={styles.returnFareIconParent}>
          <div className={styles.returnFareIcon}>
            <img
              className={styles.returnFareIconChild}
              loading="lazy"
              alt=""
              src="/group-1686551829.svg"
            />
          </div>
          <h2
            className={styles.gpsBasedBilling}
          >{`GPS Based Billing System `}</h2>
          <div className={styles.gPSBillingIcon}>
            <p className={styles.sinceTheGps}>
              Since the GPS data captures the actual distance and time traveled,
              it reduce the chance of Kilometer tampering or discrepancies in
              billing.
            </p>
          </div>
        </div>
        <div className={styles.itemLink} />
        <div className={styles.returnFareContent}>
          <div className={styles.availableRoutesDescription}>
            <div className={styles.gPSBillingExplanation}>
              <img
                className={styles.vuesaxlineardrivingIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlineardriving.svg"
              />
            </div>
            <h2 className={styles.nowAvailableRoutes}>
              Now available routes are!
            </h2>
            <div className={styles.availableRoutesIcon}>
              <div className={styles.lucknowGorakhpur}>
                Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OneWayBenefits.propTypes = {
  className: PropTypes.string,
};

export default OneWayBenefits;

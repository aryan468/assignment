import PropTypes from "prop-types";
import styles from "./HeroContent.module.css";

const HeroContent = ({ className = "" }) => {
  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <img
        className={styles.bestRoadTripsInIndia1Icon}
        alt=""
        src="/bestroadtripsinindia-1@2x.png"
      />
      <div className={styles.heroContentChild} />
      <div className={styles.indiasLeadingOneWayInterWrapper}>
        <div className={styles.indiasLeadingOneWayContainer}>
          <p className={styles.indiasLeading}>
            <span className={styles.indias}>
              <span className={styles.indias1}>{`​India's `}</span>
            </span>
            <span className={styles.leading}>
              <span className={styles.leading1}>Leading</span>
            </span>
          </p>
          <p className={styles.oneWayInterCity}>
            <span>
              <span className={styles.oneWayInterCity1}>
                <span className={styles.oneWayInterCity2}>
                  One-Way Inter-City
                </span>
              </span>
            </span>
          </p>
          <p className={styles.cabServiceProvider}>
            <span>
              <span className={styles.cabServiceProvider1}>
                Cab Service Provider
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.ebabbaadadbadnewprojectParent}>
        <div className={styles.ebabbaadadbadnewproject} />
        <div className={styles.karnatakaWrapper}>
          <div className={styles.karnataka}>
            <div className={styles.itemLink}>
              <div className={styles.ddfbbabawwwminjpg}>
                <div className={styles.outstation}>Outstation</div>
              </div>
              <div className={styles.kerala}>
                <div className={styles.local}>Local</div>
              </div>
              <div className={styles.dfdeaabdebfcceladakhjjmin}>
                <div className={styles.airport}>Airport</div>
              </div>
            </div>
            <div className={styles.ladakh}>
              <div className={styles.itemLink1}>
                <b className={styles.oneWay}>One Way</b>
              </div>
              <div className={styles.tripWayItems}>
                <b className={styles.roundTrip}>Round Trip</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.locationContentParent}>
          <div className={styles.locationContent}>
            <div className={styles.fromInputParent}>
              <div className={styles.fromInput}>
                <div className={styles.fromField}>
                  <div className={styles.fromWrapper}>
                    <b className={styles.from}>FROM</b>
                  </div>
                  <img
                    className={styles.iconXCircleCloseDelete}
                    loading="lazy"
                    alt=""
                    src="/-icon-x-circle-close-delete.svg"
                  />
                </div>
                <div className={styles.fbbaecbbffamaljpg} />
              </div>
              <div className={styles.pickUpDateParent}>
                <b className={styles.pickUpDate}>PICK UP DATE</b>
                <div className={styles.dateIcon}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className={styles.travelsafepng} />
                </div>
              </div>
            </div>
            <img
              className={styles.compareArrowsIcon}
              loading="lazy"
              alt=""
              src="/compare-arrows.svg"
            />
          </div>
          <div className={styles.toInputParent}>
            <div className={styles.toInput}>
              <b className={styles.to}>TO</b>
              <div className={styles.toIcon}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon-1.svg"
                />
                <div className={styles.travelsafepng1} />
              </div>
            </div>
            <div className={styles.pickUpAtParent}>
              <b className={styles.pickUpAt}>PICK UP AT</b>
              <div className={styles.pickupIcon}>
                <img className={styles.icon2} alt="" src="/icon-2.svg" />
                <div className={styles.itemLink2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tripTypeContent}>
          <div className={styles.eeeabfadepondechericop}>
            <b className={styles.exploreCabs}>EXPLORE CABS</b>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;

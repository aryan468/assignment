import PropTypes from "prop-types";
import styles from "./Benefits.module.css";

const Benefits = ({ className = "" }) => {
  return (
    <div className={[styles.benefits, className].join(" ")}>
      <div className={styles.travelsafepng}>
        <div className={styles.benefitsTwoItemsOneParent}>
          <div className={styles.benefitsTwoItemsOne}>
            <div className={styles.firstBenefit}>
              <b className={styles.noOverPricing}>No over-pricing</b>
            </div>
            <h2 className={styles.cheapestCostsI}>
              Cheapest costs I Competitive prices
            </h2>
          </div>
          <img className={styles.frameChild} alt="" src="/line-296.svg" />
          <div className={styles.benefitsTwoItemsOne1}>
            <div className={styles.benefitsTwoSubItemsOne}>
              <b className={styles.noReturnFare}>No return fare</b>
            </div>
            <h2 className={styles.oneWayCabFare}>
              One-Way cab fare I No hidden charges
            </h2>
          </div>
        </div>
        <div className={styles.downloadAppButton}>
          <div className={styles.downloadAppContent}>
            <div className={styles.downloadNowWrapper}>
              <b className={styles.downloadNow}>Download Now!</b>
            </div>
            <div className={styles.appStoreIcons}>
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className={styles.image7Icon}
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Benefits.propTypes = {
  className: PropTypes.string,
};

export default Benefits;

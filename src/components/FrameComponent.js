import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={[styles.aCBusComparisonDescriptionWrapper, className].join(
        " "
      )}
    >
      <div className={styles.aCBusComparisonDescription}>
        <h1 className={styles.whyChooseOne}>Why Choose One way Cab?</h1>
        <div className={styles.benefitsDetailsWrapper}>
          <div className={styles.benefitsDetails}>
            <GroupComponent
              instantBookingConfirmatio={`Instant Booking & Confirmation`}
              confirmedBookingImmediate="Confirmed Booking Immediately"
              noReturnFareForOneWayTrip="No Return Fare for One-Way Trip"
              cleanProfessionalCabServi={`Clean & Professional Cab Services`}
              transparentBillingWithGPS="Transparent Billing with GPS based billing system"
            />
            <img
              className={styles.d43c11d76c7db33af616426597e888Icon}
              loading="lazy"
              alt=""
              src="/d43c11d76c7db33af616426597e88833-2@2x.png"
            />
            <GroupComponent
              instantBookingConfirmatio="Pick-up from your house"
              confirmedBookingImmediate="Dedicated Cab just for you"
              noReturnFareForOneWayTrip="Drop to your desired destination"
              cleanProfessionalCabServi="Completed more than 20,000+ One-Way Trips"
              transparentBillingWithGPS="Multiple Payment Option including Credit Card."
              propBackgroundColor="#f2efef"
              propPadding="var(--padding-6xs) 0px var(--padding-4xs) var(--padding-10xs)"
              propBackgroundColor1="#f2efef"
              propWidth="81px"
              propDisplay="inline-block"
              propAlignSelf="stretch"
              propLineHeight="6.3px"
              propAlignSelf1="unset"
              propWidth1="110px"
              propDisplay1="inline-block"
            />
          </div>
        </div>
        <div className={styles.benefitsList}>
          <p className={styles.discoverAffordableTravelContainer}>
            <span>
              <span>Discover affordable travel with our seamless</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.intercityCarRentals}>
              <span className={styles.intercityCarRentals1}>
                intercity car rentals
              </span>
            </span>
            <span>
              {" "}
              in India – where excellence meets affordability with standardized
              rates in every city. Unleash your journey!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  instantBookingConfirmatio,
  confirmedBookingImmediate,
  noReturnFareForOneWayTrip,
  cleanProfessionalCabServi,
  transparentBillingWithGPS,
  propBackgroundColor,
  propPadding,
  propBackgroundColor1,
  propWidth,
  propDisplay,
  propAlignSelf,
  propLineHeight,
  propAlignSelf1,
  propWidth1,
  propDisplay1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const instantBookingContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const cleanProfessionalContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      lineHeight: propLineHeight,
    };
  }, [propAlignSelf, propLineHeight]);

  const transparentBillingWithContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
      display: propDisplay1,
    };
  }, [propAlignSelf1, propWidth1, propDisplay1]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div
        className={styles.instantBookingContainer}
        style={instantBookingContainerStyle}
      >
        <ul className={styles.instantBookingConfirmation}>
          <li>{instantBookingConfirmatio}</li>
        </ul>
      </div>
      <div className={styles.confirmedBookingImmediatelyContainer}>
        <ul className={styles.confirmedBookingImmediately}>
          <li>{confirmedBookingImmediate}</li>
        </ul>
      </div>
      <div className={styles.noReturnFareContainer}>
        <ul className={styles.noReturnFareForOneWayTri}>
          <li>{noReturnFareForOneWayTrip}</li>
        </ul>
      </div>
      <div
        className={styles.cleanProfessionalContainer}
        style={cleanProfessionalContainerStyle}
      >
        <ul className={styles.cleanProfessionalCabServi}>
          <li>{cleanProfessionalCabServi}</li>
        </ul>
      </div>
      <div
        className={styles.transparentBillingWithContainer}
        style={transparentBillingWithContainerStyle}
      >
        <ul className={styles.transparentBillingWithGpsB}>
          <li>{transparentBillingWithGPS}</li>
        </ul>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  instantBookingConfirmatio: PropTypes.string,
  confirmedBookingImmediate: PropTypes.string,
  noReturnFareForOneWayTrip: PropTypes.string,
  cleanProfessionalCabServi: PropTypes.string,
  transparentBillingWithGPS: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propLineHeight: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default GroupComponent;

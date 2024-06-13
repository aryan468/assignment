import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.carTypeButtonListParent, className].join(" ")}>
      <div className={styles.carTypeButtonList}>
        <div className={styles.button}>
          <h2 className={styles.label}>CAR TYPE</h2>
        </div>
        <div className={styles.sedanHatchbackSuvPassenger}>
          <div className={styles.sedanHatchbackSuvPassengerChild} />
          <div className={styles.acSedans}>AC Sedans</div>
          <div className={styles.acHatchbacks}>AC Hatchbacks</div>
          <div className={styles.acSuv}>{`AC SUV `}</div>
        </div>
      </div>
      <div className={styles.carTypeButtonList1}>
        <div className={styles.button1}>
          <h2 className={styles.label1}>MODEL INCLUDES</h2>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.etiosAmazeDzire}>Etios, Amaze, Dzire etc.</div>
          <div className={styles.wagonRCelerio}>
            Wagon R, Celerio, Micra etc.
          </div>
          <div className={styles.ertigaXyloEtc}>{`Ertiga, Xylo etc. `}</div>
        </div>
      </div>
      <div className={styles.carTypeButtonList2}>
        <div className={styles.button2}>
          <h2 className={styles.label2}>PASSENGERS</h2>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.pax}>4 Pax</div>
          <div className={styles.pax1}>4 Pax</div>
          <div className={styles.pax2}>6-7 Pax</div>
        </div>
      </div>
      <div className={styles.tripTypeButtonListParent}>
        <div className={styles.tripTypeButtonList}>
          <div className={styles.button3}>
            <h2 className={styles.label3}>IDEAL FOR</h2>
          </div>
          <div className={styles.tripTypeDescription}>
            <div className={styles.tripTypeDescriptionChild} />
            <div className={styles.comfortableTripsWith}>
              Comfortable trips with small families
            </div>
            <div className={styles.budgetTripsOver}>
              Budget trips over short distances
            </div>
            <div className={styles.premiumTripsWith}>
              Premium trips with large families
            </div>
          </div>
        </div>
        <div className={styles.tripTypeButtonList1}>
          <div className={styles.button4}>
            <h2 className={styles.label4}>FARE</h2>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.rs11km}>Rs.11/KM</div>
            <div className={styles.rs11km1}>Rs.11/KM</div>
            <div className={styles.rs13km}>Rs.13/KM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

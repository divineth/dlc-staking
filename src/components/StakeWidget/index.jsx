import React from "react";
import styles from "./stake-widget.module.css";
import DisclaimerIcon from "@/assets/images/disclaimer.svg";

export default function StakeWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <h3 className="alien-22 text-white">Stake</h3>
          <div className="alien-16 text-white">
            <p>Balance: 0</p>
            <p>Rewards: 0</p>
          </div>
        </div>
        <div className={styles.content__body}>
          <input type="text" placeholder="0.00" className={styles.stake__input} />
          <div className={styles.stake__buttons}>
            <button>Stake</button>
            <button disabled>Unstake</button>
          </div>
          <div className={styles.disclaimer}>
            <div className="flex items-center gap-1">
              <img src={DisclaimerIcon.src} alt="" />
              <h3 className="alien-16">Reward Distribution</h3>
            </div>
            <ul className="inter-reg-14">
              <li>Sed ut</li>
              <li>Sed ut</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

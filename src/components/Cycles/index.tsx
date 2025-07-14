import styles from './styles.module.css';

const Cycles = () => {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
      </div>
    </div>
  );
};

export { Cycles };

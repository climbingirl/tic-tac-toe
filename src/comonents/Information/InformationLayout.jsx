import styles from './Information.module.css';

export const InformationLayout = ({ information }) => {
  return <div className={styles.info}>{information}</div>;
};

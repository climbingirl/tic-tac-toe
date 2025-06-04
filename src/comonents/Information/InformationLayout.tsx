import styles from './Information.module.css';

interface InformationLayoutProps {
  information: string;
}

export const InformationLayout = ({ information }: InformationLayoutProps) => {
  return <div className={styles.info}>{information}</div>;
};

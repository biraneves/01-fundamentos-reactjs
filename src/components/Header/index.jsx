import styles from './styles.module.css';
import igniteLogo from '../../assets/images/ignite-logo.svg';

export const Header = () => (
  <header className={styles.header}>
    <img src={igniteLogo} alt="Loto do Ignite" />
  </header>
);

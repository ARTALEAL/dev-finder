import styles from './Header.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>DevFinder</div>
    <ThemeSwitcher />
  </header>
);

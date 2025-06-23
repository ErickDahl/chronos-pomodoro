import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Menu() {
  const iconSize = 24; // Define a size for the icons

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='/'>
        <HouseIcon size={iconSize} />
      </a>

      <a className={styles.menuLink} href='/'>
        <HistoryIcon size={iconSize} />
      </a>

      <a className={styles.menuLink} href='/'>
        <SettingsIcon size={iconSize} />
      </a>

      <a className={styles.menuLink} href='/'>
        <SunIcon size={iconSize} />
      </a>
    </nav>
  );
}

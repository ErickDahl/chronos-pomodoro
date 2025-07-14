import type { MouseEvent } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  type LucideIcon,
} from 'lucide-react';

import styles from './styles.module.css';

interface MenuItem {
  id: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    href: '/',
    icon: HouseIcon,
    label: 'Home',
  },
  {
    id: 'history',
    href: '/history',
    icon: HistoryIcon,
    label: 'Histórico',
  },
  {
    id: 'settings',
    href: '/settings',
    icon: SettingsIcon,
    label: 'Configurações',
  },
  {
    id: 'theme',
    href: '/theme',
    icon: SunIcon,
    label: 'Tema',
  },
];

const Menu = () => {
  const iconSize: number = 24;

  const handleItemClick = (
    e: MouseEvent<HTMLAnchorElement>,
    item: MenuItem,
  ): void => {
    e.preventDefault();
    console.log(`Navegando para: ${item.label}`);
  };

  return (
    <nav className={styles.menu}>
      {menuItems.map((item: MenuItem) => {
        const { id, href, icon: Icon, label } = item;

        return (
          <a
            key={id}
            className={styles.menuLink}
            href={href}
            aria-label={label}
            title={label}
            onClick={e => handleItemClick(e, item)}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </nav>
  );
};

export { Menu };

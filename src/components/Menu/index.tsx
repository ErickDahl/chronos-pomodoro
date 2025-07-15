import { useEffect, useState, type MouseEvent } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  type LucideIcon,
} from 'lucide-react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

interface MenuItem {
  id: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
  title: string;
}

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storeTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storeTheme;
  });
  const iconSize: number = 24;

  const itemActions: Record<
    string,
    (e: MouseEvent<HTMLAnchorElement>) => void
  > = {
    home: e => {
      e.preventDefault();
      console.log('Navegando para Home');
    },

    history: e => {
      e.preventDefault();
      console.log('Navegando para Histórico');
    },

    settings: e => {
      e.preventDefault();
      console.log('Abrindo Configurações');
    },

    theme: e => {
      e.preventDefault();
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    },
  };

  const themeIcon: Record<AvailableThemes, LucideIcon> = {
    dark: SunIcon,
    light: MoonIcon,
  };

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      href: '/',
      icon: HouseIcon,
      ariaLabel: 'Ir para a Home',
      title: 'Ir para a Home',
    },
    {
      id: 'history',
      href: '/history',
      icon: HistoryIcon,
      ariaLabel: 'Ir para o Histórico',
      title: 'Ir para o Histórico',
    },
    {
      id: 'settings',
      href: '/settings',
      icon: SettingsIcon,
      ariaLabel: 'Ir para as Configurações',
      title: 'Ir para as Configurações',
    },
    {
      id: 'theme',
      href: '/theme',
      icon: themeIcon[theme],
      ariaLabel: 'Alternar tema',
      title: 'Alternar tema',
    },
  ];

  const handleItemClick = (
    e: MouseEvent<HTMLAnchorElement>,
    itemId: string,
  ): void => {
    const action = itemActions[itemId];
    if (action) {
      action(e);
    } else {
      e.preventDefault();
      console.log(`Ação não definida para: ${itemId}`);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      {menuItems.map(item => {
        const { id, href, icon: Icon, title, ariaLabel } = item;

        return (
          <a
            key={id}
            className={styles.menuLink}
            href={href}
            aria-label={ariaLabel}
            title={title}
            onClick={e => handleItemClick(e, id)}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </nav>
  );
};

export { Menu };

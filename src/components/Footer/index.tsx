import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='/'>entenda como funciona a técnica pomodoro</a>
      <a href='/'>Chronos pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
};

export { Footer };

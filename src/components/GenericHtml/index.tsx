import styles from './styles.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

const GenericHtml = ({ children }: Readonly<GenericHtmlProps>) => {
  return <div className={styles.genericHtml}>{children}</div>;
};

export { GenericHtml };

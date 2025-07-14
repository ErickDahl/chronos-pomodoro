import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: Readonly<ContainerProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { Container };

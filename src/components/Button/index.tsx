import styles from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

const Button = ({ icon, color = 'green', ...props }: Readonly<ButtonProps>) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[color]}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export { Button };

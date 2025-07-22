/* eslint-disable react/button-has-type */
import styles from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

const Button = ({
  icon,
  type = 'button',
  color = 'green',
  ...props
}: Readonly<ButtonProps>) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export { Button };

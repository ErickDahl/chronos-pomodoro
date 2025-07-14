import styles from './styles.module.css';

type InputProps = {
  id: string;
  label: string;
} & React.ComponentProps<'input'>;

const Input = ({ id, label, ...rest }: Readonly<InputProps>) => {
  return (
    <>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} id={id} {...rest} />
    </>
  );
};

export { Input };

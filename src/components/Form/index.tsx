import { PlayCircleIcon } from 'lucide-react';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import styles from './styles.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <Input id={'task'} label={'task'} placeholder='text' />
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};

export { Form };

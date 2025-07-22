import { useRef } from 'react';
import { PlayCircleIcon } from 'lucide-react';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import styles from './styles.module.css';

const Form = () => {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const createTask = (taskName: string) => {
    const newTask: TaskModel = {
      id: crypto.randomUUID(),
      name: taskName,
      startDate: Date.now(),
      interruptDate: null,
      completeDate: null,
      duration: 1,
      type: 'workTime',
    };

    setState(prevState => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: 1,
      secondsRemaining: newTask.duration * 60,
      formattedSecondsRemaining: '00:00',
      tasks: [...prevState.tasks, newTask],
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert('Please enter a task name');
      return;
    }

    createTask(taskName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <Input
          ref={taskNameInput}
          id={'task'}
          label={'task'}
          placeholder='text'
        />
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <Button type='submit' icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};

export { Form };

import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  setState: Dispatch<SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: ReactNode;
};

const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, setState] = useState(initialState);

  const value: TaskContextProps = useMemo(
    () => ({ state, setState }),
    [state, setState],
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskContextProvider };

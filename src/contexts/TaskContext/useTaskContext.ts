import { useContext } from 'react';

import { TaskContext } from './index';

export const useTaskContext = () => {
  return useContext(TaskContext);
};

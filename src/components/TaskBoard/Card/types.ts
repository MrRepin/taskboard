import { Task } from '../../../types';

export interface ITaskProps {
  task: Task;
  onClick: (task: Task) => void;
  active?: boolean;
};
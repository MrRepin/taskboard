import { Task } from '../../../types';

export interface IModalProps {
  task: Task;
  onClose?: () => void;
};

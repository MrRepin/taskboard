import { Status, Task } from '../../../types';

export interface IColumnProps {
  onDrop: (id: Task['id'], status: Status) => void;
  status: Status;
};
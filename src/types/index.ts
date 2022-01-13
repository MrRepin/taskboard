export type Status = 'PLAN' | 'IN PROGRESS' | 'TESTING' | 'DONE';

export type Priority = 'MUST' | 'SHOULD' | 'COULD';

export type Task = {
  id: string,
  title: string,
  name: string,
  surname: string,
  status: Status,
  priority: Priority,
  date: string,
};

export type HashMap<T> = {
  [key: string]: T;
};
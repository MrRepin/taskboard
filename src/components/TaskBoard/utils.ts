import { HashMap, Task } from '../../types';

export const getUsersFromTasks = (tasks: Task[]) => {
  const users: HashMap<string> = {};

  for (let task of tasks) {
    const userKey = `${task.name} ${task.surname}`;

    users[userKey] = userKey;
  }

  return Object.keys(users);
};

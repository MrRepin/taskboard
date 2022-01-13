import React, { useMemo, useState } from 'react';

import { TaskBoardCard } from './Card';
import { TaskBoardColumn } from './Column';
import { Modal } from './Modal';

import { Status, Task } from '../../types';

import { getUsersFromTasks } from './utils';

import { taskList, statuses } from '../../api/data';

import styles from './styles.module.scss';

export const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(taskList);
  const [modalTask, setModalTask] = useState<Task>({} as Task);

  const userList = useMemo(() => getUsersFromTasks(taskList), []);

  const handleDrop = (id: Task['id'], status: Status) => {
    const changedTaskId = tasks.findIndex(task => task.id === id);
    const tasksCopy = [...tasks];

    tasksCopy[changedTaskId].status = status;

    setTasks(tasksCopy);
  };

  const handleClick = (task: Task = {} as Task) => {
    setModalTask(task);
  };

  const renderTasks = () => {
    return userList.map(user => {
      const userTasks = taskList.filter(task => `${task.name} ${task.surname}` === user);

      return (
        <>
          <tr className={styles.user}>
            <td>{user}</td>
          </tr>
          <tr className={styles.tasks}>
            {
              statuses.map((status, index) => {
                return (
                  <TaskBoardColumn
                    key={index}
                    status={status}
                    onDrop={handleDrop}
                  >
                    {
                      userTasks.map(task => {
                        if (task.status === status) {
                          return (
                            <TaskBoardCard
                              active={modalTask.id === task.id}
                              key={task.id}
                              task={task}
                              onClick={handleClick}
                            />
                          )
                        }
                      })
                    }
                  </TaskBoardColumn>
                )
              })
            }
          </tr>
        </>
      )
    })
  };

  return (
    <div className={styles.board}>
      <table>
        <thead>
        <tr className={styles.statuses}>
          {
            statuses.map((status, index) => {
              return <th key={index}>{status}</th>
            })
          }
        </tr>
        </thead>
        <tbody>
          {
            renderTasks()
          }
        </tbody>
      </table>
      {
        modalTask.id && <Modal onClose={handleClick} task={modalTask} />
      }
    </div>
  )
};
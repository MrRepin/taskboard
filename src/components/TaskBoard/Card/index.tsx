import React from 'react';
import classNames from 'classnames';
import { useDrag } from 'react-dnd';

import { ITaskProps } from './types';

import styles from './styles.module.scss';

export const TaskBoardCard: React.FC<ITaskProps> = (props) => {
  const {
    task,
    onClick,
    active,
  } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: task,
  }));

  const handleClick = () => {
    onClick(task);
  };

  return (
    <div
      ref={drag}
      className={classNames(styles.card, task.priority, {
        [styles.dragging]: isDragging,
        [styles.active]: active,
      })}
      onClick={handleClick}
    >
      <div className={styles.content}>
        <p className={styles.number}>{task.id}</p>
        <p className={styles.title}>{task.title}</p>
      </div>
    </div>
  )
};
import React from 'react';
import classNames from 'classnames';
import { useDrop } from 'react-dnd';

import { IColumnProps } from './types';
import { Task } from '../../../types';

import styles from './styles.module.scss';

export const TaskBoardColumn: React.FC<IColumnProps> = (props) => {
  const {
    children,
    status,
    onDrop,
  } = props;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: Task) => {
      onDrop(item.id, status);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <td
      ref={drop} valign="top"
      className={classNames(styles.column, {
        [styles.overed]: isOver,
      })}
    >
      {children}
    </td>
  )
};
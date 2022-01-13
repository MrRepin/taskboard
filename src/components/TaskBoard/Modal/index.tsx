import React from 'react';
import classNames from 'classnames';

import { IModalProps } from './types';

import styles from './styles.module.scss';

export const Modal: React.FC<IModalProps> = (props) => {
  const { task, onClose } = props;

  return (
    <div className={classNames(styles.modal, task.priority)}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>{task.id}</span>
          <span>{task.title}</span>
        </div>
        <p className={styles.name}>Responsible: {`${task.surname} ${task.name}`}</p>
        <p className={styles.date}>Date: {task.date}</p>
        <p className={styles.status}>Status: {task.status}</p>
        <button
          className={styles.close}
          onClick={onClose}
        >
          &#10006;
        </button>
      </div>
    </div>
  )
};

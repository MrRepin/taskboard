import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { TaskBoard } from './components/TaskBoard';

import './assets/styles/main.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <TaskBoard />
      </DndProvider>
    </div>
  )
};

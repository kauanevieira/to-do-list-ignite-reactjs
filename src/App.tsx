import { useState } from 'react'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList';

import "./global.css"


export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  const [newTask, setNewTask] = useState("");

  function handleCreateTask(taskTitle: string) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks)
  }

  function completeTask(taskId: string) {       
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(newTask);
  }
  

  return (
    <>
      <Header handleCreateTask={handleCreateTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask} onCompleted={completeTask} />
    </>
  )
}


import './App.css';
import { useState } from "react"
import Header from "./Components/Header"
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: '1 to 1 Meeting', 
        day: 'September 2nd at 16:10',
        reminder: true,
    },
    {
        id: 2,
        text: 'Game Dev Meeting', 
        day: 'August 26th at 19:00',
        reminder: false,
    },
    {
        id: 3,
        text: 'Dentist appointment', 
        day: 'October 12th at 10:00',
        reminder: true,
    }
  ])

  //Add To Do
  const addTask = (task) => {
    const id = Math.floor(Math.random()* 10000) +1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Reminder on/off 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task)
    )}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> 
      : ('Nothing to do, take a breather!')}
    </div>
  );
}


export default App;

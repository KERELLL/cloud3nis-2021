import React from 'react';
import Task from'./components/Task';
import TaskAdd from'./components/TaskAdd';

class App extends React.Component{
  
  constructor(){
    super();

    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Почистить зубы',
          description: "Открыть зубную пасту, намазать зубную щетку, почистить зубы",
          completed: false
        },
        {
          id: 2,
          name: 'Убрать постель',
          description: "Взять одеяло, расправить и положить на кравать, потом накрыть простыней",
          completed: false
        },
        {
          id: 3,
          name: 'Приготовить завтрак',
          description: "Взять нужные продукты, например, яйца, пожарить яичницу",
          completed: false
        },
        {
          id: 4,
          name: 'Сделать дз по НИСу',
          description: "Открыть гугл-форму с дз, посмотреть материалы прошлых лекций и семенаров, сделать дз",
          completed: false
        },
        {
          id: 5,
          name: 'Погулять с собакой',
          description: "нацепить ошейник на собаку, выйти на улицу, погулять с ней 30 минут",
          completed: false
        }
      ]
    }
  }

  addTask = task => {
    this.setState(state =>{
      let{tasks} = state;
       task = {
        id: tasks.length !== 0 ? tasks.length + 1: 0,
        name: task,
        completed: false
      }
      return {tasks: tasks.concat([task])}
    })
  }
  completedTasks = id =>{
    console.log("complete " + id)
    this.setState(prevState => ({
        tasks: prevState.tasks.map(
          obj => (obj.id === id ? Object.assign(obj, { completed: true }) : obj)
        )
    }));
  }

  deleteTasks = id =>{
    const idx = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[idx];
      return tasks;
    });
  }


  render() {

    const {tasks} = this.state
    return <div className = "App">
      <h1 className = "top"> Your to do list</h1>
      {
        tasks.map(task=>(
          <Task 
          completedTasks = {() => this.completedTasks(task.id)}
          deleteTasks = {() => this.deleteTasks(task.id)}
          task = {task} 
          key ={task.id}></Task>
        ))}
        <TaskAdd addTask = {this.addTask}></TaskAdd>
    </div>
  }

}

export default App;

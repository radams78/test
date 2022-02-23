import React from 'react';
import './App.css';
import { ToDoList } from './tasks/todolist';
import { PleaseWait } from './tasks/pleasewait';
import axios, { AxiosResponse } from 'axios';
import { Task } from "../../server/src/model/task.interface";
import { Outlet } from 'react-router-dom';

export class App extends React.Component<{},{receivedTasks : boolean, tasks : Task[]}> {
  state = {receivedTasks : false, tasks : []};

  override async componentDidMount() {
    this.refreshTaskList();
  }
  
  private async refreshTaskList() {
    // TODO Extract hostname
    // TODO Handle timeout?
    const res: AxiosResponse<Task[]> = await axios.get<Task[]>("http://localhost:8080/task");
    this.setState({ receivedTasks : true, tasks: res.data });
  }

  override render() {
    if (this.state.receivedTasks) return <div><ToDoList tasks = {this.state.tasks} 
      refreshTaskList={() => this.refreshTaskList()}
    />
    <Outlet />
    </div>
    else return <PleaseWait />
  }
}
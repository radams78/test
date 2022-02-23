import { Task } from "../../../server/src/model/task.interface";

import React from "react";
import { ToDoItem } from "./todoitem";
import { NewItemField } from "./newitemfield";
import axios from "axios";

interface ToDoListProps {
    tasks : Task[],
    refreshTaskList : () => void
}

export class ToDoList extends React.Component<ToDoListProps, {}> {
    constructor(props: ToDoListProps) {
      super(props);
  
      this.addNewTask = this.addNewTask.bind(this);
    }
  
    private async markTaskDone(id: number) {
      // TODO Extract hostname
      await axios.put<never>("http://localhost:8080/task/" + id,
        { done: true }
      );
      this.props.refreshTaskList();
    }
  
    private async addNewTask(description: string) {
      await axios.put("http://localhost:8080/task", { description: description });
      this.props.refreshTaskList();
    }
  
    override render() {
      return <ul>
        {this.props.tasks.map((task: Task) => (task.done) ?
          <ToDoItem key={task.id.toString()} description={task.description} done={true} handleCheck={() => { }} />
          :
          <ToDoItem key={task.id.toString()} description={task.description} done={false}
            handleCheck={() => { this.markTaskDone(task.id); }} />
        )}
        <NewItemField key="new item" addNewTask={this.addNewTask} />
      </ul>
    }
  }
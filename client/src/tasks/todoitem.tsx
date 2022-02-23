import { Task } from "../../../server/src/model/task.interface";

import { Link } from "react-router-dom";

export function ToDoItem(props: {
    task : Task,
    handleCheck: () => void
  }) {
    return <li>
      <input type="checkbox"
        checked={props.task.done}
        onChange={(event) => { props.handleCheck(); }}
      />
      <Link to={`/task/${props.task.id}`}>{props.task.description}</Link>
    </li>
  }
  
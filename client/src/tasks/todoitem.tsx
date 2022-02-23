export function ToDoItem(props: {
    description: string,
    done: boolean,
    handleCheck: () => void
  }) {
    return <li>
      <input type="checkbox"
        checked={props.done}
        onChange={(event) => { props.handleCheck(); }}
      />
      {props.description}
    </li>
  }
  
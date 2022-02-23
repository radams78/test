import { useState } from "react";

export function NewItemField(props: { addNewTask: (description: string) => void }) {
    const [description, setDescription] = useState("");
  
    return <li>
      <form onSubmit={async (event) => {
        event.preventDefault();
        props.addNewTask(description);
      }}>
        <input type="text" value={description} onChange={(event) => {
          setDescription(event.target.value);
        }} />
      </form>
    </li>
  }
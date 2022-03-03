import { FormEvent, useState } from "react";

export function NewItemField(props: { addNewTask: (description: string) => void }) {
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    return <li>
      <form onSubmit={async (event) => {
        event.preventDefault();

        if (description === "") {
          setError("Description cannot be empty");
          return;
        }
        
        if (description[0] >= '0' && description[0] <= '9') {
          setError("Description must not start with a number");
          return;
        }

        props.addNewTask(description);
      }}>
        <input type="text" value={description} onChange={(event) => {
          setDescription(event.target.value);
        }} />
        {error ? <span style={{color: "red"}}>{error}</span> : ""}
      </form>
    </li>
  }
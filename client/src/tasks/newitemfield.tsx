import { FormEvent, useState } from "react";

export function NewItemField(props: { addNewTask: (description: string) => void }) {
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({newDescription : ""})

    async function handleSubmit (event : FormEvent) {
      event.preventDefault();
      if (description === "") {
        setErrors({newDescription: "Task cannot be empty"});
        return;
      }
      if (! (description[0] >= "A" && description[0] <= "Z")) {
        setErrors({newDescription: "Task must start with a capital letter"});
        return;
      }
      props.addNewTask(description);
      setErrors({newDescription : ""});
    }

    return <li>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" required value={description} onChange={(event) => {
          setDescription(event.target.value);
        }} />
        {errors.newDescription == "" ? "" : <span style={{color:"red"}}>{errors.newDescription}</span>}
      </form>
    </li>
  }
import { Task } from "../../../server/src/model/task.interface";

import { useOutletContext, useParams } from "react-router-dom"

export function TaskView() {
    const params = useParams();
    const tasks : Task[] = useOutletContext();

    if (! params.taskId) {
        return <p>Error - no taskId</p>
    }
    const thisTask = tasks.find((t : Task) => t.id == parseInt(params.taskId as string, 10));

    if (! thisTask) return <p>No such task!</p>
    return <p>This is task ID {params.taskId}. Its description is {thisTask.description}.</p>
}
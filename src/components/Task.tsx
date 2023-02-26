import { Check, Trash } from "phosphor-react";
import { ITask } from "../App";

import styles from "./Task.module.css"

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Task({task, onDelete, onCompleted}: Props) {
    return (
        <div className={styles.task}>

            <button onClick={() => onCompleted(task.id)}>
                {task.isCompleted ? <div className={styles.notChecked}> <Check className={styles.buttonCheck}/></div> : <div></div> }
            </button>

            <p className={task.isCompleted ? styles.checked : ""}>{task.title}</p>

            <button onClick={() => onDelete(task.id)}><Trash size={18}/></button>

        </div>
    )
}
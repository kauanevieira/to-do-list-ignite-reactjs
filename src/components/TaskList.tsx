import { ClipboardText } from "phosphor-react";
import { ITask } from "../App";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function TaskList({tasks, onDelete, onCompleted}: Props) {

    const total = tasks.length;
    const taskCompleted = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.taskList}>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{total}</span>
                </div>

                <div>
                    <p>Concluídas</p>
                    <span>{taskCompleted} de {total}</span>
                </div>
            </header>

            <div>
                {tasks.map((task) => {
                    return <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onCompleted={onCompleted}
                    />
                })}

                {tasks.length <= 0 && (
                    <div className={styles.taskEmpty}>
                    <ClipboardText size={56}/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                )}
                
            </div>

        </section>
    )
}
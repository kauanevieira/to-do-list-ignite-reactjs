import styles from "./Header.module.css";
import logo from "../assets/Logo.svg";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Props {
    handleCreateTask: (taskTitle:string) => void;
}

export function Header({handleCreateTask}: Props) {
    const [title,setTitle] = useState("");

    const inputEmpty = title.length === 0

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        handleCreateTask(title);
        setTitle("")
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setTitle(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <form onSubmit={handleSubmit}>
                <input 
                    value={title}
                    onChange={onChangeTitle}
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <button type="submit" className={styles.buttonCreate}>Criar <PlusCircle size={20}/></button>
            </form>

            
        </header>
    )
}
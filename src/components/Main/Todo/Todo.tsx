import { IInputModel } from "../../Models/models"

// Task with his special properties (look at Models).
export const Todo = (props: IInputModel) => {

    // Styles added when the task is done or active.
    const styles = {
            textDecoration: (props.done ? "line-through" : "none"),
            color: (props.done ? "gray" : "black"),
        }


    return (
        // Displayed task with checked or unchecked box and binded function update and delete.
        <div className="checkbox">
            <label>
                <input type="checkbox" checked={props.done} onChange={() => props.update(props.id, props.done)}/>
                <span style={styles}>{props.text}</span>
            </label>
            <i className="bi bi-trash text-danger pull-right" style={{cursor: "pointer"}} onClick={() => props.del(props.id)} />
        </div>
    )
}
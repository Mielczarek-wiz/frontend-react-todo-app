import { IInputModel } from "../../Models/models"

export const Todo = (props: IInputModel) => {

    const styles = {
            textDecoration: (props.done ? "line-through" : "none"),
            color: (props.done ? "gray" : "black"),
        }


    return (
        <div className="checkbox">
            <label>
                <input type="checkbox" checked={props.done} onChange={() => props.update(props.id, props.done)}/>
                <span style={styles}>{props.text}</span>
            </label>
            <i className="bi bi-trash text-danger pull-right" style={{cursor: "pointer"}} onClick={() => props.del(props.id)} />
        </div>
    )
}
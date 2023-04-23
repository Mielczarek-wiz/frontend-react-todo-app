import { IDataModelMain } from "../Models/models"
import { Todo } from "./Todo/Todo"

export const Main = (props: IDataModelMain) => {

    const todos = props.todos.map((item) => (
        <Todo 
            key={item._id} 
            id={item._id} 
            done={item.done} 
            text={item.text} 
            update={props.update} 
            del={props.del}/>
    ))

    return (
        <main id="todo-list" className="row">
            <div className="col-sm-4 col-sm-offset-4">
                {todos}
            </div>
        </main>
    )
}
import { IDataModelMain } from "../Models/models"
import { Todo } from "./Todo/Todo"

// Main component - props get the tasks, update function reference and delete function reference.
export const Main = (props: IDataModelMain) => {

    // Convert task to Todo components.
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
        // Displaying the Todos components from above (or information about empty tasks).
        <main id="todo-list" className="row">
            <div className="col-sm-4 col-sm-offset-4">
                {todos.length !== 0 && todos}
                {todos.length === 0 && <div className="text-center"> No elements to display. </div>}
            </div>
        </main>
    )
}
import { useOutletContext } from "react-router-dom";
import { Header } from "../Header/Header";
import { IDataModel, ITodos } from "../Models/models";
import { Main } from "../Main/Main";

// Page with done tasks.
export const Done = () => {

    // Getting props from context (name for header, tasks, update and delete function references)
    const props: IDataModel = useOutletContext();

    // Filtering tasks to get only tasks which are done.
    const todos: ITodos[] = props.todos.filter((item) => item.done)

    // Rendering Header and Main component.
    return(
        <section>
            <Header name={props.name} length={todos.length}/>
            <Main todos={todos} update={props.update} del={props.del}/>
        </section>
    )
}
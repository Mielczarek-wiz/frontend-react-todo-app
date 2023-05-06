import { IDataModel } from "../Models/models";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { useOutletContext } from "react-router-dom";

// Page with all tasks.
export const All = () => {

    // Getting props from context (name for header, tasks, update and delete function references)
    const props: IDataModel = useOutletContext();

    // Rendering Header and Main component.
    return(
        <section>
            <Header name={props.name} length={props.todos.length}/>
            <Main todos={props.todos} update={props.update} del={props.del}/>
        </section>
    )
}
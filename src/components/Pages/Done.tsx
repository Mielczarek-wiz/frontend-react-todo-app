import { useOutletContext } from "react-router-dom";
import { Header } from "../Header/Header";
import { IDataModel, ITodos } from "../Models/models";
import { Main } from "../Main/Main";

export const Done = () => {

    const props: IDataModel = useOutletContext();

    const todos: ITodos[] = props.todos.filter((item) => item.done)

    return(
        <section>
            <Header name={props.name} length={todos.length}/>
            <Main todos={todos} update={props.update} del={props.del}/>
        </section>
    )
}
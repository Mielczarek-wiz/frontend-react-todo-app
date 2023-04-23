import { IDataModel } from "../Models/models";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { useOutletContext } from "react-router-dom";

export const All = () => {

    const props: IDataModel = useOutletContext();

    return(
        <section>
            <Header name={props.name} length={props.todos.length}/>
            <Main todos={props.todos} update={props.update} del={props.del}/>
        </section>
    )
}
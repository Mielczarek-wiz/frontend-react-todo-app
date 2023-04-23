import { IHeader } from "../Models/models"

export const Header = (props: IHeader) => {

    return(
        <header className="jumbotron text-center">
            <h1>nodeTODO {props.name} <span className="label label-info">{props.length}</span></h1>
        </header>
    )
}
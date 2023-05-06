import { IHeader } from "../Models/models"

// Props has name and the number of tasks (look to Models)
export const Header = (props: IHeader) => {

    return(
        // Header with name and number of tasks.
        <header className="jumbotron text-center">
            <h1>nodeTODO {props.name} <span className="label label-info">{props.length}</span></h1>
        </header>
    )
}
import { IFooter } from "../Models/models"

// Props has (look at the interface in Models) the value and the function for changing value which has affect in header.
export const Footer = (props: IFooter) => {

    return (
    // Footer with input for name
    <footer id="todo-form" className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
            <input type="text" className="form-control" value={props.value} onChange={props.onChange}/>
        </div>
    </footer>
    )
}
import { IFooter } from "../Models/models"

export const Footer = (props: IFooter) => {

    return (
    <footer id="todo-form" className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
        <input type="text" className="form-control" value={props.value} onChange={props.onChange}/>
        </div>
    </footer>
    )
}
import { useForm } from "react-hook-form";
import { IForm, ITodo } from "../Models/models";
import { useEffect } from "react";

// Props has just the function for handling submit.
export const Form = (props: IForm) => {

    // For handling form we are using library react-forms. Default value of input is the empty string. Text of the input is required.
    const {register, handleSubmit, reset, formState} = useForm<ITodo>({ defaultValues: { text: "" } });
    
    // After successful submiting form the text is set to empty string again.
    useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({text: ""}); 
        }
      }, [formState, reset])
      

    return (
      // Form with input for the text of the task and button for submiting. The text is required.
        <section id="todo-form" className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <form onSubmit={handleSubmit(props.add)}>
              <div className="form-group">
                <input id="newTodo" type="text" className="form-control input-lg text-center" placeholder="co jeszcze chcesz zrobić?" required={true} {...register("text")}/>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Dodaj</button>
            </form>
          </div>
        </section>
    )
}
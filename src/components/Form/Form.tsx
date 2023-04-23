import { useForm } from "react-hook-form";
import { IForm, ITodo } from "../Models/models";
import { useEffect } from "react";

export const Form = (props: IForm) => {
    const {register, handleSubmit, reset, formState} = useForm<ITodo>({ defaultValues: { text: "" } });
      
    useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({text: ""}); 
        }
      }, [formState, reset])
      
    return (
        <section id="todo-form" className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <form onSubmit={handleSubmit(props.add)}>
              <div className="form-group">
                <input id="newTodo" type="text" className="form-control input-lg text-center" placeholder="co jeszcze chcesz zrobić?" {...register("text")}/>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Dodaj</button>
            </form>
          </div>
        </section>
    )
}
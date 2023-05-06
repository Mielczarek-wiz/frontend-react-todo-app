import { Outlet, useLocation } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { ITodo, ITodos } from "../Models/models";
import { SubmitHandler } from "react-hook-form";
import { Footer } from "../Footer/Footer";
import { Form } from "../Form/Form";
import { Navbar } from "../Navbar/Navbar";
import './Layout.css';
import { callDel, callGet, callPatch, callPost } from "../../api/api";

// This is the main function of our app.
export const Layout = () => {
    
    // Creating states for tasks and name.
    const [todos, setTodos] = useState<ITodos[]>([]);
    const [name, setName] = useState<string>("Damiaś");

    // Getting the location path needed further.
    const location = useLocation();

    // In here we get tasks from database by using useEffect function (just once - empty array)
    useEffect(() => {
      async function getData() {
        try {

          // Calling the Get function from api file.
          const res = await callGet();

          // Setting the result to state.
          setTodos(res);

        } catch (error) {

          // If error occures logging it and set the tasks as empty array.
          console.error(error);
          setTodos([]);
        }
      }
    getData()}, [])

    // Function for handling adding new task (used in Form component). Data is just the text for the new task.
    const add: SubmitHandler<ITodo> = async (data: ITodo) => {

      try {
        // Calling the Post function from api file.
        const res = await callPost(data);

        // Setting the result to state.
        setTodos(res);
      } catch (error) {

        // If error occures logging it and set the tasks as empty array.
        console.error(error);
        setTodos([]);
      }
    }
    
    // Function for updating task (used in Todo component) with (id as string, done as boolean) of given task
    const update = async (id: string, done: boolean) => {

      try {
        // Calling the Patch function from api file.
        const res = await callPatch(id, done);

        // Setting the result to state.
        setTodos(res);
      } catch (error) {

        // If error occures logging it and set the tasks as empty array.
        console.error(error);
        setTodos([]);
      }

    }

    // Function for deleting task (used in Todo component) with (id as string) of given task
    const del = async (id: string) => {

      try {

        // Calling the Patch function from api file.
        const res = await callDel(id);

        // Setting the result to state.
        setTodos(res);
      } catch (error) {

        // If error occures logging it and set the tasks as empty array.
        console.error(error);
        setTodos([]);
      }

    }

    // Function used in Footer component for handling name changes in Header component.
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {

      // Setting the name in state.
      setName(event.target.value);
    };

    // Using "if" statement for showing the components if the user is on the correct path. If not the NoPage is rendered. Outlet render correct page.
    return (
      <>
        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Navbar />}
  
        <Outlet context={{name, todos, update, del}}/>

        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Form add={add} /> }

        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Footer value={name} onChange={handleInputChange}/> }
      </>
    )
  };
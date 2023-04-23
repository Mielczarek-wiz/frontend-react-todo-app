import { Outlet, useLocation } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { ITodo, ITodos } from "../Models/models";
import { SubmitHandler } from "react-hook-form";
import { Footer } from "../Footer/Footer";
import { Form } from "../Form/Form";
import { Navbar } from "../Navbar/Navbar";
import './Layout.css';
import { callDel, callGet, callPatch, callPost } from "../../api/api";


export const Layout = () => {

    const [todos, setTodos] = useState<ITodos[]>([]);
    const [name, setName] = useState<string>("Damiaś");
    const location = useLocation();


    useEffect(() => {
      async function getData() {
        const res = await callGet();
        setTodos(res);
      }
    getData()}, [])


    const add: SubmitHandler<ITodo> = async (data: ITodo) => {

      const res = await callPost(data);
      setTodos(res);
      
    }
      
    const update = async (id: string, done: boolean) => {

      const res = await callPatch(id, done);
      setTodos(res);
    }

    const del = async (id: string) => {

      const res = await callDel(id);
      setTodos(res);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    return (
      <>
        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Navbar />}
  
        <Outlet context={{name, todos, update, del}}/>

        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Form add={add} /> }

        {(location.pathname === "/" || location.pathname === "/done" || location.pathname === "/active") && <Footer value={name} onChange={handleInputChange}/> }
      </>
    )
  };
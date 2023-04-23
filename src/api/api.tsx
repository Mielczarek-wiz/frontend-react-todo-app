import axios, { AxiosRequestConfig } from "axios";
import { IRawTodos, ITodo, ITodos } from "../components/Models/models";

const mainUrl = "http://localhost:4000/api/todos/";

const preProcessing = (data: IRawTodos, status: number, statusText: string) => {

    const newData: ITodos[] = [];
    if(status === 200) {
        Object.keys(data).map((key)=> newData.push({_id: data[key]._id, __v: data[key].__v, done: data[key].done, text: data[key].text} as ITodos));
    } else {
        console.log(statusText);
    }
    return newData;

  }

export const callGet = async () =>  {

    const res = await axios.get(mainUrl);
    return preProcessing(res.data, res.status, res.statusText);
}

export const callPost = async (data: ITodo) =>  {

    const res = await axios.post(mainUrl, JSON.stringify({text: data.text}), {headers: {'Content-Type': 'application/json'}} as AxiosRequestConfig);
    return preProcessing(res.data, res.status, res.statusText);
}

export const callDel = async (id: string) =>  {
    
    const res = await axios.delete(mainUrl + id);
    return preProcessing(res.data, res.status, res.statusText);
}

export const callPatch = async (id: string, done: boolean) =>  {

    const res = await axios.patch(mainUrl + id, JSON.stringify({done: !done}), {headers: {'Content-Type': 'application/json'}} as AxiosRequestConfig);
    return preProcessing(res.data, res.status, res.statusText);
}
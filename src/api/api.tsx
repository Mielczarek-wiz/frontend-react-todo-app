import axios, { AxiosRequestConfig } from "axios";
import { IRawTodos, ITodo, ITodos } from "../components/Models/models";

// Main URL for all requests.
const mainUrl = "http://localhost:4000/api/todos/";

// Function used to process data from IRawTodos interface (hard to manage) to ITodos (easy to manage).
const preProcessing = (data: IRawTodos, status: number, statusText: string) => {
  
    // Creating new table with needed interface.
    const newData: ITodos[] = [];

    // Another check for request status.
    if(status === 200) {

        // Iterating for the object and adding good object to newData table.
        Object.keys(data).map((key)=> newData.push({_id: data[key]._id, __v: data[key].__v, done: data[key].done, text: data[key].text} as ITodos));
    } else {

        // Again loging the information with error.
        console.log(statusText);
    }

    // Returning data in the correct format.
    return newData;

  }

// Function for getting tasks from database.
export const callGet = async () => {
    try {
  
      // Calling api (server.js in express) with axios library
      const res = await axios.get(mainUrl);
  
      // Preprocessing data using preProcessing function described above.
      return preProcessing(res.data, res.status, res.statusText);
  
    } catch (error) {
  
      // If error occures consol log the error and return empty array.
      console.error(error);
      return [];
    }
  };
  
  // Function for adding tasks to database.
  export const callPost = async (data: ITodo) => {
    try {
  
      // Calling api (server.js in express) with axios library (added needed header)
      const res = await axios.post(mainUrl, JSON.stringify({ text: data.text }), {
        headers: { "Content-Type": "application/json" },
      } as AxiosRequestConfig);
  
      // Preprocessing data using preProcessing function described above.
      return preProcessing(res.data, res.status, res.statusText);
  
    } catch (error) {
  
      // If error occures consol log the error and return empty array.
      console.error(error);
      return [];
    }
  
  };
  
  // Function for deleting tasks from database.
  export const callDel = async (id: string) => {
    try {
  
      // Calling api (server.js in express) with axios library
      const res = await axios.delete(mainUrl + id);
  
      // Preprocessing data using preProcessing function described above.
      return preProcessing(res.data, res.status, res.statusText);
  
    } catch (error) {
  
      // If error occures consol log the error and return empty array.
      console.error(error);
      return [];
    }
  
  };
  
  // Function for updating tasks in the database.
  export const callPatch = async (id: string, done: boolean) => {
    try {
  
      // Calling api (server.js in express) with axios library (added needed header)
      const res = await axios.patch(mainUrl + id, JSON.stringify({ done: !done }), {
        headers: { "Content-Type": "application/json" },
      } as AxiosRequestConfig);
      
      // Preprocessing data using preProcessing function described above.
      return preProcessing(res.data, res.status, res.statusText);
      
    } catch (error) {
  
      // If error occures consol log the error and return empty array.
      console.error(error);
      return [];
  
    }
  };
import { ChangeEventHandler } from "react";
import { SubmitHandler } from "react-hook-form";

// Interface for Todo component. Receiving id of task, task text, if it is done and function of deleting and updating references.
export interface IInputModel {
    id: string;
    text: string;
    done: boolean;
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}

// Interface for Pages. Receiving name for header, tasks list and function of deleting and updating references.
export interface IDataModel {
    name: string;
    todos: ITodos[];
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}

// Interface for Main component. Receiving tasks list and function of deleting and updating references.
export interface IDataModelMain {
    todos: ITodos[];
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}

// Interface for Form component - just reference for adding new task function.
export interface IForm {
    add: SubmitHandler<ITodo>
}

// Interface for Header component. Receiving name changing in the footer and the length of the task array.
export interface IHeader {
    name: string;
    length: number;
}

// Interface for Footer component. Receiving value (which is the name combined with Header component) and onChange reference function.
export interface IFooter {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

// Interface for the text of the task.
export interface ITodo {
    text: string
}
// Interface for tasks.
export interface ITodos {
    _id: string;
    __v: number;
    done: boolean;
    text: string;
}

// Middleware interface for tasks from api to app. (need to be converted to ITodos)
export interface IRawTodos {
    [key: string]: {
        _id: string;
        __v: number;
        done: boolean;
        text: string;
    };
}
import { ChangeEventHandler } from "react";
import { SubmitHandler } from "react-hook-form";

export interface IInputModel {
    id: string;
    text: string;
    done: boolean;
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}

export interface IDataModel {
    name: string;
    todos: ITodos[];
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}
export interface IDataModelMain {
    todos: ITodos[];
    update: (id: string, done: boolean) => void;
    del: (id: string) => void;
}
export interface IForm {
    add: SubmitHandler<ITodo>
}
export interface IHeader {
    name: string;
    length: number;
}
export interface IFooter {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface ITodo {
    text: string
}

export interface ITodos {
    _id: string;
    __v: number;
    done: boolean;
    text: string;
}

export interface IRawTodos {
    [key: string]: {
        _id: string;
        __v: number;
        done: boolean;
        text: string;
    };
}
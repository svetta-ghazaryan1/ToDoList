import React from "react";
import { Task } from "../type";

interface Data {
    todo:Task[]
    deltask:Function
    addtask:Function
    changeDone:Function
}

export const Mycontext=React.createContext <Data> ({}as Data)
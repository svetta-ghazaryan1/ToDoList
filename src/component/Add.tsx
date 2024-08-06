import React, { useContext } from "react";
import { Mycontext } from "../context/Mycontext";
import { useForm } from "react-hook-form";

export const Add: React.FC = React.memo(() => {
    const { addtask } = useContext(Mycontext);
    const { handleSubmit, register, reset } = useForm();

    const save = (data: any) => {
        addtask(data);
        console.log("add");
        reset()
    };

    return (
        <div className="div">
           
            <form onSubmit={handleSubmit(save)} className="form">
                <input type="text" {...register("description")} className="inp"  placeholder="Fill your task here"/>
                <button type="submit" className="save-button">Add</button>
            </form>
        </div>
    );
});
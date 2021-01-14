import React, { Fragment, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

export const TodoList =() => {
    const [tasks, setTasks] = useState([]);
    const [initialValue, setInitialValue] = useState(null);

    let newTask = event => {
        let myInput = document.querySelector("#taskInput");
        let newTask = event.target.value;

        if (event.keycode == 13) {
            event.preventDefault();
            if (newTask) {
                setTasks(tasks => [...tasks, newTask]);
                myInput.value = "";
            }
        }
    }
};
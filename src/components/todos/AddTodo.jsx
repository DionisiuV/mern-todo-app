import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { addTodo, updateTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

export default function AddTodo({ todo, setTodo }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        isComplete: todo.isComplete,
        date: new Date(),
      };

      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <TextField
          id="enter-todo"
          label="Todo name"
          variant="outlined"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <Button variant="contained" color="primary" type="submit">
          <Send />
        </Button>
      </form>
    </div>
  );
}

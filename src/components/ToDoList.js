import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { todoListStyle } from "../styles/styles";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const todos = useSelector((store) => store.todos);
  console.log("🚀 ~ file: ToDoList.js:8 ~ ToDoList ~ todos:", todos);
  return (
    <Grid container style={todoListStyle} justifyContent="center" spacing={2}>
      {todos.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </Grid>
  );
}

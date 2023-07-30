import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  inputContainerStyle,
  inputFieldStyle,
  pageStyle,
} from "../styles/styles";

import { useDispatch } from "react-redux";
import ToDoList from "../components/ToDoList";

export default function ToDoForm() {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);

  function createTodo() {
    const id = uuidv4();
    let newTodo = { firstName, lastName, email, title, id };
    console.log("🚀 ~ file: ToDoForm.js:29 ~ ToDoForm ~ id:", id);
    dispatch({ type: "ADD_TO_DO", payload: newTodo });
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={pageStyle}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item style={inputContainerStyle} xs={12}>
          <Box sx={{ mt: 4 }} style={pageStyle}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create a To Do{" "}
            </Typography>{" "}
          </Box>
        </Grid>

        <Grid item style={inputContainerStyle} xs={12}>
          <TextField
            id="title"
            label="To Do Title"
            name="title"
            placeholder="TextHere"
            style={inputFieldStyle}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
        </Grid>
        <Grid item style={inputContainerStyle} xs={12}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            placeholder="TextHere"
            style={inputFieldStyle}
            onChange={(e) => setFirstName(e.target.value)}
          />{" "}
        </Grid>
        <Grid item style={inputContainerStyle} xs={12}>
          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            placeholder="TextHere"
            style={inputFieldStyle}
            onChange={(e) => setLastName(e.target.value)}
          />{" "}
        </Grid>
        <Grid item style={inputContainerStyle} xs={12}>
          <TextField
            id="email"
            label="Email"
            name="email"
            placeholder="TextHere"
            style={inputFieldStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item style={inputContainerStyle} xs={12}>
          <Button variant="contained" type="submit" onClick={createTodo}>
            Submit
          </Button>{" "}
        </Grid>
        <ToDoList />
      </Grid>
    </Box>
  );
}

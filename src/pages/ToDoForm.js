import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { inputContainerStyle, inputFieldStyle, pageStyle } from "../styles";

export default function ToDoForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [todo, setTodo] = useState(null);

  function submitForm(values) {
    console.log(values);
  }

  useEffect(() => {
    console.log(firstName, lastName, email, todo);
  }, [firstName, lastName, email, todo]);

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
            id="todo"
            label="To Do Title"
            name="todo"
            placeholder="TextHere"
            style={inputFieldStyle}
            onChange={(e) => setTodo(e.target.value)}
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
          <Button variant="contained" type="submit" onClick={submitForm}>
            Submit
          </Button>{" "}
        </Grid>
      </Grid>
    </Box>
  );
}

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { todoCardButtonContainerStyle } from "../styles/styles";

export default function ToDoItem({ item }) {
  const dispatch = useDispatch();

  const { firstName, lastName, id, email, title } = item;
  console.log("🚀 ~ file: ToDoItem.js:11 ~ ToDoItem ~ item:", item);

  function completeTodo() {
    dispatch({ type: "COMPLETE_TO_DO", id });
  }
  return (
    <Grid item sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {" "}
        <Fragment>
          <CardContent>
            <Typography variant="h6" component="div">
              {/* Created by: {firstName} {lastName} */}
              {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Created by: {firstName} {lastName}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              {email}
            </Typography>
          </CardContent>
          <CardActions style={todoCardButtonContainerStyle}>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={completeTodo}
            >
              Mark Complete
            </Button>
          </CardActions>
        </Fragment>
      </Card>
    </Grid>
  );
}

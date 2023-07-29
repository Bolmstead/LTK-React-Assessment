import Container from "@mui/material/Container";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import HomePage from "./pages/HomePage.js";
import ToDoForm from "./pages/ToDoForm.js";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container maxWidth="md">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/create-todo" element={<ToDoForm />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

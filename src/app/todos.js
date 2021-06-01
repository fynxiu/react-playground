import React, { useReducer, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

/**
 *
 * @param {Array} state
 * @param {*} action
 */
const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, { text: action.text, completed: false }];
    case "DELETE":
      return todos.filter((e) => e.text !== action.text);
    case "DONE":
      return todos.map((e) =>
        e.text === action.text ? { ...e, completed: true } : e
      );
    default:
      throw new Error(`No such action type: ${action.type}`);
  }
};

export default function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, dispatch] = useReducer(todosReducer, []);
  const handleAddClick = (text) => {
    console.log(`handleAddClick ${text}`);
    dispatch({ type: "ADD", text });
  };

  const handleTodoDone = (e) => {
    console.log(`handleTodoDone: ${JSON.stringify(e)}`);
  };

  const handleTodoDelete = (text) => {
    dispatch({ type: "DELETE", text });
  };

  return (
    <Grid>
      <Row>
        <input
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        ></input>
        <button
          onClick={() => {
            handleAddClick(currentTodo);
            setCurrentTodo("");
          }}
        >
          Add
        </button>
      </Row>
      {todos.map((e) => (
        <Row>
          <Col>
            <input
              type="checkbox"
              defaultChecked={e.completed}
              onChange={handleTodoDone}
            ></input>
          </Col>
          <Col>{e.text}</Col>
          <Col>
            <button onClick={() => handleTodoDelete(e.text)}>delete</button>
          </Col>
        </Row>
      ))}
    </Grid>
  );
}

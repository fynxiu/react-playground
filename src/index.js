import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = count + " times";
  }, [count]);
  return (
    <Grid>
      <Row>
        <Col>You've clicked {count} times.</Col>
      </Row>
      <Row>
        <Col>
          <button type="button" onClick={increaseCount}>
            increase
          </button>
        </Col>
      </Row>
    </Grid>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));

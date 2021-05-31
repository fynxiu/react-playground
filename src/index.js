import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import FriendList from "./components/FriendList";
import LocaleContext from "./context/Locale";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = count + " times";
  }, [count]);

  const locale = useContext(LocaleContext);
  return (
    <Grid>
      <Row>
        <FriendList />
      </Row>
      <Row>{locale.country}</Row>
      <Row>{`You've clicked ${count} times.`}</Row>
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

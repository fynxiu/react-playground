import React, { useEffect, useState } from "react";
import { render } from "react-dom";

export default function App(params) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class _App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setDocumentTitle() {
    document.title = `${this.state.count} times`;
  }

  componentDidMount() {
    this.setDocumentTitle();
  }

  componentDidUpdate() {
    this.setDocumentTitle();
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

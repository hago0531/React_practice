import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("first render");
  }
  state = {
    //state 에는 바꾸고 싶은 data를 넣는다.
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  mis = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  render() {
    //return 처럼 react는 render method를 자동적으로 실행한다.
    console.log("Im rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.mis}>Minus</button>
      </div>
    );
  }
}
export default App;

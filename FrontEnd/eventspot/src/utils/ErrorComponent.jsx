import React from "react";



class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      try {
        // Do something that could throw
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      if (this.state.error) {
        return <h1>Caught an error.</h1>
      }
      return <button onClick={this.handleClick}>Click Me</button>
    }
  }

  export default MyComponent
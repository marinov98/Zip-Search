import React from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Zip Code Search</h1>
          Zipe Code:
          <input type="text" name="zipcode" />
        </div>
      </div>
    );
  }
}

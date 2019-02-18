"use strict";

const e = React.createElement;
const { Button, TextField } = window["material-ui"];

class App extends React.Component {
  state = {
    result: "",
    port: "http://",
    domain: ""
  };

  handleChange = result => event => {
    const domain = event.target.value;
    const port = this.state.port;
    this.setState({ [result]: port + domain });
  };
  render() {
    return (
      <div>
        <TextField
          id="standard-name"
          label="result"
          margin="normal"
          variant="outlined"
          defaultValue={this.state.port}
          value={this.state.result}
        />
        <br />

        <TextField
          id="standard-name"
          label="domain name"
          onChange={this.handleChange("result")}
          margin="normal"
        />
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(App), domContainer);

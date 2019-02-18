<<<<<<< HEAD
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
=======
'use strict';


const e = React.createElement;
const {
    Button,
    TextField,
    // colors,
    // createMuiTheme,
    // CssBaseline,
    // Dialog,
    // DialogActions,
    // DialogContent,
    // DialogContentText,
    // DialogTitle,
    // Icon,
    // MuiThemeProvider,
    // Typography,
    // withStyles,
  } = window['material-ui'];

class App extends React.Component {
    state = {
        result: '',
        port: 'http://',
        domain: '',
      };
    
    handleChange = result => event => {
        const domain = event.target.value;
        const port = this.state.port;
        console.log(port);
        this.setState({ [result]: port + domain });
    };
  render() {


      return <div>
>>>>>>> 14450e28322fd4c0e72927393b044214dc9bc13d
        <TextField
          id="standard-name"
          label="result"
          margin="normal"
          variant="outlined"
          defaultValue={this.state.port}
          value={this.state.result}
<<<<<<< HEAD
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
=======
        /><br />

          <TextField
          id="standard-name"
          label="domain name"
          onChange={this.handleChange('result')}
          margin="normal"
        />
            {/* <Button variant="contained" color="primary" onClick={this.handleClick} >Text</Button>
             */}
      </div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);
>>>>>>> 14450e28322fd4c0e72927393b044214dc9bc13d

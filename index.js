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
        <TextField
          id="standard-name"
          label="result"
          margin="normal"
          variant="outlined"
          defaultValue={this.state.port}
          value={this.state.result}
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
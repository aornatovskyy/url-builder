"use strict";

const e = React.createElement;
const { Button, TextField } = window["material-ui"];

class App extends React.Component {
  state = {
    result: "",
    port: "http://",
    domain: "",
    parameters: [
      { id: 1, param: "", paramValue: ""},
      { id: 2, param: "", paramValue: ""}
    ]
  };
  constructor(props){
      super(props);
  }

  handleChange =  event => {
    const domain = event.target.value;
    this.setState({ domain:  domain });
  };

  componentDidUpdate(prevProps){
    let {port, domain, parameters , result} = this.state;
    let url = port + domain;
    
    if(parameters.length > 0){
        url += "?"
    } 

    parameters.forEach(el=>{
        if(el.param !=="" || el.paramValue !=="" )
        url += el.param + "=" + el.paramValue + "&";
    })
    url = url.slice(0, -1)
    if(url != result){
        this.setState({result : url});
    }
   

    
  }

  onChangeParams = event => {
    const field_id = event.id;
    const param = event.param;
    const paramValue = event.paramValue;
   
    let parameterss = this.state.parameters;

    parameterss.forEach(element => {
       if(element.id == field_id && (element.param !=param || element.paramValue !=paramValue)){
          element.param = param;
          element.paramValue = paramValue;
          this.setState({parameters: parameterss });
       }
    });
  };

  render() {
    const { parameters } = this.state;
    return (
      <div>
        <TextField
          id="standard-name"
          label="result"
          margin="normal"
          variant="outlined"
          fullWidth
          value={this.state.result}
        />
        <br />

        <TextField
          id="standard-name"
          label="domain name"
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          value={this.state.domain}
        />

        {parameters.map(el => {
            return <UrlParam key={el.id + ""} values={el} onChangeParam={this.onChangeParams} 
         />
        })

        }
      </div>
    );
  }
}

class UrlParam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:"",
        param: "",
        paramValue: ""
    };
   
    }

  componentDidUpdate() {
    const state = this.state;
    this.props.onChangeParam(state);
  }

  handleChangeParam = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ id:id,param: value });
  };

  handleChangeValue = event => {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({ id: id, paramValue: value });
  };

  render() {
    let {id} = this.props.values;
     // console.log(this.props.values)
    return (
      <div>
        <TextField
          id={id.toString()}
          label="param name"
          onChange={this.handleChangeParam}
          margin="normal"
          value={this.state.param}
        />
        <TextField
          id={id.toString()}
          label="param value"
          onChange={this.handleChangeValue}
          margin="normal"
          value={this.state.paramValue}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(App), domContainer);

import axios from 'axios';
import React from 'react';
import './form.css';
import ReactJson from 'react-json-view';


class Main extends React.Component {
  constructor(props) {
    super(props);
    // let params = new URL(document.location).searchParams;
    this.state = {
      formValues: {
        output: '',
        apiCall: '',
        link: '',
        METHOD: '',
        yourPoke: ''
      },
    };
  }

  handleWord = e => {
    let link = e.target.value;
    this.setState({ link });
  };


  handleChangeInput = (e) => {
    let fieldName = e.target.name;//Takes label input, whatever typed
    let value = e.target.value;//Takes radio button clicked
    console.log(value);
    let formValues = { ...this.state.formValues, [fieldName]: value }
    this.setState({ formValues });

    // superagent.post('/api/person').send(this.state.formValues)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(results => {
        console.log(results);
        this.setState({ ...this.state, output: `${this.state.formValues.METHOD} ${this.state.formValues.link}`, yourPoke: results })//use key to traverse
      })
  }
  render() {
    return (
      <>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="link" onChange={this.handleChangeInput} />
            <button>Submit</button>
          </div>
          <div>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="METHOD" value="GET" />
              <span>GET</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="METHOD" value="POST" />
              <span>POST</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="METHOD" value="PUT" />
              <span>PUT</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="METHOD" value="DELETE" />
              <span>DELETE</span>
            </label>
          </div>

          <div id="output">
            <ReactJson src={this.state.yourPoke} theme="monokai" />
          </div>


        </form>


      </>
    );
  }
}


export default Main;

import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    // let params = new URL(document.location).searchParams;
    this.state = {
      formValues: {},
    };
  }

  handleWord = e => {
    let link = e.target.value;
    this.setState({ link });
  };

  // handleClick = e => {
  //   e.preventDefault();
  //   let link = this.state.link
  //     .split('')
  //     .reverse()
  //     .join('');
  //   this.setState({ link });
  // };
  handleChangeInput = (e) => {
    let fieldName = e.target.name;//Takes label input, whatever typed
    let value = e.target.value;//Takes radio button clicked
    console.log(value);
    let formValues = { ...this.state.formValues, [fieldName]: value }
    this.setState({ formValues });
    console.log(formValues);

    // superagent.post('/api/person').send(this.state.formValues)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, link: this.state.formValues.link })
  }

  render() {
    return (
      <>
        <h2>{this.state.link}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="link" onChange={this.handleChangeInput} />
          </div>
          <div>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="URL" value="GET" />
              <span>GET</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="URL" value="POST" />
              <span>POST</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="URL" value="PUT" />
              <span>PUT</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="URL" value="DELETE" />
              <span>DELETE</span>
            </label>
          </div>

          <button>Submit</button>
        </form>
      </>
    );
  }
}
//   render() {
//     return (
//       <div>
//         <h3>{this.state.link}</h3>
//         <input onChange={this.handleWord} />
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }

export default Main;

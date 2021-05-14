import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    let params = new URL(document.location).searchParams;
    this.state = {
      words: params.words || 'nothing to see here',
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');
    this.setState({ words });
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Main;

import React from 'react';

class App extends React.Component {
  state = {
    content: '',
    charLimit: 50
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
      return(
      <div>
        <form>
          <input type = 'text' name = 'content' value = {this.state.content} onChange = {this.handleOnChange}/>
          <h2>Remaining Characters: {this.state.charLimit - this.state.content.length}</h2>
        </form>
      </div>
      );
  }
}

export default App;

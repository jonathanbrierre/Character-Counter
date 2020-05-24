import React from 'react';
import Swal from 'sweetalert2'

class App extends React.Component {
  state = {
    content: '',
    charLimit: 10
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if(this.state.content.length <= this.state.charLimit){
      Swal.fire({icon: 'success', text: 'Successful Submission'})
    }else{
      Swal.fire({icon: 'error', text: 'Character Limit Exceeded'})
    }
  }

  render(){
      return(
      <div style ={{textAlign: "center", height: '100vh'}}>
        <form onSubmit = {this.handleOnSubmit} style={{marginTop: '50vh'}}>
          <input type = 'text' name = 'content' value = {this.state.content} onChange = {this.handleOnChange}/>
          <input type = 'submit' disabled ={this.state.content.length > 0 ? false:true}/>
          <h2>Remaining Characters: {this.state.charLimit - this.state.content.length}</h2>
        </form>
      </div>
      );
  }
}

export default App;

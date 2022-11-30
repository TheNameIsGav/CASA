import React from 'react';
import axios from 'axios';

class AppTest extends React.Component {
  state = {
    title: '',
    body: ''
  };

  getBlogPost = () => {
    axios.get('http://localhost:3000/api/tested')
      .then((response) => {
        const data = response.data;
        console.log ('data has been sent to the server');
      })
      .catch (() => {
        alert('error retrieveing data');
      })

  }

  handleChange = ({target}) => {
    const {name, value} = target;

    this.setState({
      [name]: value
    })
  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title:this.state.title,
      body: this.state.body
    }

    axios ({
      url: 'http://localhost:3001/api/testing/name',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log ('data has been sent to the server');
        this.resetUserInput();
      })
      .catch (() => {
        console.log('ERROR data has NOT been sent to the server');
      })
  };

  resetUserInput = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayBlogPost = (posts) =>  {
    if (!posts.length) return null;
    
  }


  render (){
    console.log('State: ', this.state);
    return (
      <div>
        <h2> Welcome to my Appp</h2>
        <form onSubmit = {this.submit}>
          <div className = "form-input">
            <input 
              type = "text"
              name = "title"
              placeholder = "TITLE"
              value = {this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className = "form-input">
            <textarea 
                name = "body"
                placeholder = "BODY"
                cols = "30"
                rows = "10"
                value = {this.state.body}
                onChange={this.handleChange}
              > </textarea>
          </div>
          <button> Submit </button>
        </form>
        <div className='blog-'>

        </div>
      </div>
    );

  }
}

export default AppTest;
import React from 'react';
import axios from 'axios';

class AppTest extends React.Component {
    state = {
        title: '',
        body: ' ',
        posts: []
    };

    componentDidMount = () => {
        this.getBlogPost(); 
    }

    getBlogPost = () => {
        axios.get('http://localhost:3001/api')
            .then((response) => {
                const data = response.data; 
                this.setState({posts: data});
                console.log('data has been receieved');
            })
            .catch (() => {
                alert('error in retrieving data')
            })
    }
    
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value

        });
    };

    submit = (event) => {
        event.preventDefault();
        const payload = {
            title: this.state.title,
            body: this.state.body
        }

        axios({
            url: 'http://localhost:3001/api/testing/save',
            method: 'POST',
            data: payload
        })
            .then (() => {
                console.log('data has been sent to the server');
            })
            .catch (() => {
                console.log('internal server error');
            })
    };

 

    render (){
        console.log('State: ', this.state);
        return(
            <div>
                <h2>Welcome to my App</h2>
                <form onSubmit={this.submit}>
                    <div className="form-input">
                        <input
                            type = "text"
                            name = "title"
                            placeholder = "Title"
                            value = {this.state.title}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className='form-input'>
                        <textarea 
                            name = "body" 
                            placeholder = "Body"
                            cols="30" 
                            rows = "10" 
                            value = {this.state.body} 
                            onChange = {this.handleChange}
                        >
                        </textarea>
                    </div>
                    <button>Submit</button>
                </form>

                <div className = "blog-">

                </div>
            </div>
        )
    }

}

export default AppTest;
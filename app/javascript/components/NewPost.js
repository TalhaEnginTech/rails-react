import React from 'react';
import {Redirect} from 'react-router-dom';
const axios = require('axios');
export default class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title here...',
            description: '',

        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    createPostRequest = (event) => {
        console.log('this.state', this.state);
        fetch('/api/v1/posts', {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            alert('Post created successfully');
            // location.href = '/api/v1/posts';
        });
    }





    render() {
        const {title, description} = this.state;
        return (
            <div>
                <h3>New Post</h3>
                <div>
                    <label>Title: </label>
                    <input
                        type='text'
                        name='title'
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        className= "form-control"
                        required
                    />

                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={this.handleInputChange}
                    />
                </div>

                <button onClick={this.createPostRequest}>Create</button>
            </div>
        );
    }
}
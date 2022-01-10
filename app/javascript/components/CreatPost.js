import React from "react";
import {Link} from "react-router-dom";

class CreatPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
           description: "",

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/posts";
        const { title, description } = this.state;



        const body = {
            title,
            description,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            }).then((response) => {
            alert('Post created successfully');
             location.href = '/api/v1/posts';
        });
            // .then(response => this.props.history.push(`/recipe/${response.id}`))
            // .catch(error => console.log(error.message));
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <h1 className="font-weight-normal mb-5">
                            Add a new post.
                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="recipeName">Title</label>
                                <input
                                    type="text"
                                    name="title"

                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipeIngredients">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />

                            </div>

                            <button type="submit" className="btn custom-button mt-3">
                                Create
                            </button>

                            {/*<Link to="/recipes" className="btn btn-link mt-3">*/}
                            {/*    Back to recipes*/}
                            {/*</Link>*/}
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default CreatPost;
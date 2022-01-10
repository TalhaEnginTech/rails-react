import React from "react";
import ReactDOM from "react-dom";
import {
    Switch,
    Route,
} from "react-router-dom";
import Post from "../components/Post";
import CreatPost from "../components/CreatPost";
export default () => {
    return (
        <Switch>
            <Route exact path="/posts">
                <Post />
            </Route>
            <Route
                path="/post/new"
                exact
                component={CreatPost}
            />

        </Switch>
    );
}



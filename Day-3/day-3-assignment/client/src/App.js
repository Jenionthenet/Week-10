import { useEffect } from "react";
import { connect } from 'react-redux'
import * as actionCreators from "./store/creators/actionCreators"
import PostList from "./components/PostList";

function App(props) {

    useEffect(() => {
        props.onFetchPosts()
    }, [])

    return (
        <div>
            <h1>App</h1>
            <PostList/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPosts: () => dispatch(actionCreators.fetchPosts())
    }
}

export default connect(null, mapDispatchToProps)(App);
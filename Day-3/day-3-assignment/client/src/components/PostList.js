import { connect } from "react-redux"

function PostList(props) {

    const postItems = props.posts.map((post) => {
        return <li>
            {post.title}
        </li>
    })

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    )
}

const mapStateToProps = (state)  => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList)
import { Component } from "react"
import "./Articles.css"

class Articles extends Component {

    render() {
        const articleList = this.props.allArticles.map((article, index) => {
            return <li key = {index}><h2 id="articleTitle" >{article.title}</h2> <p>{article.content}</p> <div id="commentsLikes"><h3 id="comments">{article.comment}</h3><h3 id="likes">{article.likes}</h3></div> </li>
        })
        return (
            <ul>
                {articleList}
            </ul>
        )
    }
}

export default Articles
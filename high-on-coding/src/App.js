import { directive } from "@babel/types";
import React, { Component } from "react"
import Articles from "./Articles";
import Menu from './Menu'
import SubHeading from "./SubHeading";

class App extends Component {

  render() {

    const articles = [
      {title: "Hello WatchKit", content: "Last month Apple realesed the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.  The WatchKit framework enabled the developers to create Apple Watch applications.  In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.", comment: "12 comments", likes: "124 likes"},
      {title: "Introduction to Swift", content: "Swift is a modern programming language developed by Apple to create the next generation of iOs and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started.", comment: "15 comments", likes: "45 likes"}
    ]
    
    return (
      <div>
        <Menu/>
        <SubHeading/>
        <Articles allArticles = {articles}/>
      </div>
    )

  }
}

export default App

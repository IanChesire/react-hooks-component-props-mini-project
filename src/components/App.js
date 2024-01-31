import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header header= {blogData.name}/>
     <About Image={blogData.image} Paragraph={blogData.about}/>
     <ArticleList Post={blogData.posts}/>
    </div>
  );
}

export default App;

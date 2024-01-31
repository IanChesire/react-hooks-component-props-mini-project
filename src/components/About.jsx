import React from 'react'
// import blogData from '../data/blog'

function About({Image, Paragraph}) {
  return (
    <aside>
        
        {/* {Image && Image.length> 1 ? <img src='Image'/> : <img src='https://via.placeholder.com/215'/> }   */}
        
        <img src={ Image } alt="blog logo"/>
        <p>{Paragraph}</p>
    </aside>
  )
}

export default About